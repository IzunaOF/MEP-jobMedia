import { Request, Response } from "express";
import { BasicCommentSchema, BasicPostSchema } from "../types/basicInterfaces";
import type { TComment } from "../types/basicInterfaces";
import PrismaConnection from "../database";
export class Comment {
    constructor() {}
}

export default class Posts {
    private posts: BasicPostSchema;
    private comments: Array<BasicCommentSchema<TComment>>;
    constructor(postForm: BasicPostSchema) {
        this.posts = postForm;
        this.comments = [];
    }
    public async commentPost(req: Request, res: Response) {
        try {
            if (req.method != "POST") throw new Error("Sessão inválida");

            const { content, userRef, postRef } = req.body;
            const createdComment = await new PrismaConnection().createPostComment({
                content: content,
                references: { userRef: userRef, contentRef: postRef },
            });
            res.status(200).json(createdComment);
        } catch (error) {
            console.error(error);
            res.status(405).end();
        }
    }
}
