import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma: PrismaClient = new PrismaClient();

import {
    BasicAdressSchema,
    BasicCommentAnswersSchema,
    BasicPostSchema,
    BasicUserSchema,
    TComment,
} from "../types/basicInterfaces.ts";
import { system } from "../../app/controller/systemControl.ts";

export default class PrismaConnection {
    private db: PrismaClient;
    constructor() {
        this.db = prisma;
    }
    async getUsers(query: string) {
        try {
            const users = await this.db.user.findMany({
                where: {
                    firstName: query,
                },
            });
            if (!users) throw new Error("Contato com perdido com o banco de dados.").message;
            if (users.length === 0) throw new Error("Não há usuários cadastrados com este dado").message;

            const dbResponse = (): Array<BasicUserSchema> => {
                const user = users.map((u) => {
                    return {
                        firstName: u.firstName,
                        lastName: u.lastName,
                        image: u.image,
                        cpf: "",
                        password: "",
                        email: u.email,
                        birthday: u.birthday,
                        phone: u.phone,
                    };
                });
                return user;
            };
            return dbResponse();
        } catch (error) {
            return error;
        }
    }

    async verifyCPFUnicity(cpf: string) {
        const hasTaken = await this.db.user.findUnique({
            where: {
                cpf: cpf,
            },
        });

        // const u = await prisma.user.findUnique({
        //     where: {
        //         id: "asd",
        //     },
        //     select: {
        //         posts: {
        //             include: { comments: true },
        //         },
        //     },
        // });
        // const f = prisma.post.findMany({
        //     where: {
        //         id: {},
        //     },
        // });
        if (hasTaken) return true;
        return false;
    }

    async registryUser(bio: string, user: BasicUserSchema, adress: BasicAdressSchema) {
        if (!bio || !user || !adress) throw new Error("Invalid Credentials!");

        await this.db.user.create({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                cpf: user.cpf,
                birthday: user.birthday,
                hashedPassword: user.password,
                image: user.image,
                phone: user.phone,
                adress: {
                    create: {
                        country: adress.country,
                        state: adress.state,
                        city: adress.city,
                        neighbor: adress.neighbor,
                        street: adress.street,
                        cep: adress.cep,
                        localNumber: adress.number,
                        complement: adress.complement,
                    },
                },
                profile: {
                    create: {
                        bio: bio,
                    },
                },
            },
        });
        await this.dropDBConnection();

        return true;
    }

    //  FRIEND SECTION

    async addUserFriend(friendId: string) {
        const friend = await this.db.user.findUnique({
            where: {
                id: friendId,
            },
        });

        if (!friend) throw new Error("This user does not exist");

        // await this.db.user.update({
        //     where:{
        //         id: 'aspdioj'

        //     },
        //     data:{
        //         f
        //     }

        // })
        await this.db.friend.create({
            data: {
                friendId: friend.id,
            },
        });
    }

    async deleteUserFriend(friendId: string) {
        const friend = await this.db.user.findUnique({
            where: {
                id: friendId,
            },
        });

        if (!friend) throw new Error("This user does not exist");

        await this.db.friend.delete({
            where: {
                id: friendId,
            },
        });

        return true;
    }

    async getUserFriends(userId: string) {
        const allFriends = await this.db.friend.findMany({
            where: {
                friendId: userId,
            },
        });

        if (!allFriends) throw new Error(`Friends list are empty!`);

        return allFriends;
    }

    // SESSION SECTION

    async signIn(cpf: string, password: string) {
        const isRegistered = await this.db.user.findUnique({
            where: {
                cpf: cpf,
            },
        });
        if(isRegistered == null) return false;
        const profile = await this.db.profile.findUnique({
            where: {
                userId: isRegistered.id,
            },
        });
        // const comparedPasswords = await bcrypt.compare(password, isRegistered?.hashedPassword || "");

        if (!isRegistered || !profile) return false;

        return { profile, user: isRegistered };
    }

    async getSession(userId: string) {
        const user = await this.db.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                sessions: true,
            },
        });
        return user?.sessions;
    }

    async createSession(userId: string) {
        if (userId == undefined) return false;
        const date = new Date();
        console.log(date.getDate()+1);
        console.log(date.getMonth()+1);
        console.log(date.getFullYear());
        console.log(new Date(`${date.getMonth() + 1}/${date.getDate()+1}/${date.getFullYear()}`));
        
        await this.db.session.create({
            data: {
                sessionToken: system.session.getSession().token || "",
                userId: userId,
                expires: new Date(`${date.getMonth() + 1}/${date.getDate()+1}/${date.getFullYear()}`),
            },
        });
    }

    // POSTS SECTION

    async getUniquePost(postId: string) {
        const post = await this.db.post.findUnique({
            where: {
                id: postId,
            },
        });
        if (!post) throw new Error("There is no post with that Identification.");
        return post;
    }

    async getManyPost(postId: string, authorId?: string) {
        const posts = await this.db.post.findMany({
            where: {
                id: postId,
                OR: {
                    authorId: authorId,
                },
            },
        });
        if (!posts) throw new Error("There is no post with that Identification.");
        return posts;
    }

    async getLatestPosts(postId: string, authorId?: string) {
        const latestPosts = await this.db.post.findMany({
            where: {
                id: postId,
                AND: {
                    authorId: authorId,
                },
            },
            take: 5,
        });

        if (!latestPosts) throw new Error("Your Post List are empty!");

        return latestPosts;
    }

    async getUserFriendsPosts(userId: string) {
        const user = await this.db.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) throw new Error("User does not exist");

        const friends = await this.db.friend.aggregate({
            where: {
                friendId: user?.id,
            },
        });
        const allPosts = await this.db.post.findMany({
            where: {
                authorId: friends,
            },
        });

        return allPosts;
    }
    async createPost(post: BasicPostSchema) {
        const createdPost = await this.db.post.create({
            data: {
                title: post.title,
                image: post.image,
                content: post.content,
                published: post.toPublish,
                authorId: post.authorId,
            },
        });

        return createdPost;
    }
    async createPostComment(comment: TComment) {
        const createdComment = await this.db.comment.create({
            data: {
                content: comment.content,
                postId: comment.references.contentRef,
                userId: comment.references.userRef,
            },
        });

        return createdComment;
    }
    async unOrLikePost(postId: string, value: number) {
        value < 0
            ? await this.db.post.update({
                  where: {
                      id: postId,
                  },
                  data: { likes: { decrement: 1 } },
              })
            : await this.db.post.update({
                  where: {
                      id: postId,
                  },
                  data: { likes: { increment: 1 } },
              });
    }

    // COMMENT TO A POST COMMENT

    async commentAnswer(resp: BasicCommentAnswersSchema<TComment>) {
        const toAnswer = await this.db.comment.findUnique({
            where: {
                id: resp.answerEntry.references.contentRef,
            },
        });

        if (!toAnswer) throw new Error("Can not answer an unregistered comment.");
        const createdAnswer = await this.db.commentAnswer.create({
            data: {
                id: "asd",
                content: resp.answerEntry.content,
                commentId: resp.answerEntry.references.contentRef,
                userId: resp.answerEntry.references.userRef,
            },
        });
        return createdAnswer;
    }

    // DROP DATABASE CONNECTION == ???????

    async dropDBConnection() {
        try {
            await this.db.$disconnect();
        } catch (err) {
            console.error(err);
            await this.db.$disconnect();
            process.exit();
        }
    }
}

export const DBConnect = new PrismaConnection();
// main()
//     .then(async () => {
//         await this.db.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await this.db.$disconnect();
//         process.exit();
//     });
