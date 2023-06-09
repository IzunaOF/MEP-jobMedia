export type TComment = {
    content: string;
    references: {
        userRef: string;
        contentRef: string;
    };
};

export interface BasicAdressSchema {
    country: string;
    state: string;
    city: string;
    neighbor: string;
    street: string;
    cep: string;
    number: string;
    complement: string;
}

export type BasicUserSchema = {
    firstName: string;
    lastName: string;
    image: string;
    cpf: string;
    email: string;
    password: string;
    birthday: string;
    phone: string;
    profile?: string;
};
export type BasicAdminSchema = {
    firstName: string;
    lastName: string;
    image?: string;
    cpf: string;
    email: string;
    password: string;
    birthday: string;
    profile?: string;
    admin: boolean;
};

export interface BasicPostSchema {
    title: string;
    image?: string;
    content?: string;
    toPublish: boolean;
    authorId: string;
}
export interface BasicCommentSchema<Comment> {
    commentEntry: Comment;
}

export interface BasicCommentAnswersSchema<Comment> {
    answerEntry: Comment;
}

export interface tokenVeritfy {
    token: string;
    identifier: string;
    expires: string;
}

export interface Masks {
    maskName: string;
    regex: RegExp;
    callbackFn?: Function;
}
export type Profile = { id: string | null; bio: string | null; rating: number | null };
