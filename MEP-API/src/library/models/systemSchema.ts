import { Request, Response } from "express";
import { DBConnect } from "../database";
import { system } from "../../app/controller/systemControl";

export async function singIn(req: Request, res: Response) {
    try {
        if (req.method != "POST") throw new Error("Invalid Method!");

        const { login, password } = req.body;

        const validCpf = system.useMask("cpf").validate(login);
        const validPassword = system.useMask("password").callbackFn(password);

        if (!validCpf && !validPassword)
            throw new Error("Os dados passados são inválidos, verifique-os e tente novamente!");

        const credentials = await DBConnect.signIn(login, password);

        if (!credentials) return res.status(302).json("sem dados");
        const hasSession = await DBConnect.getSession(credentials.user?.id);
        if (hasSession === undefined) return res.status(302).json("sem dados");

        if (credentials && hasSession.length <= 0) {
            const c = credentials.user;
            const p = credentials.profile;
            system.session.setSession({
                firstName: c.firstName,
                lastName: c.lastName,
                image: c.image,
                phone: c.phone,
                email: c.email,
                profile: {
                    id: p.id,
                    bio: p.bio,
                    rating: p.rating,
                },
            });

            await DBConnect.createSession(credentials.user.id);
            res.status(201).json(credentials).end();
            return;
        }
        await DBConnect.dropDBConnection();
        return res.status(201).json(credentials).end();
    } catch (error) {
        console.error(error);
        res.status(400)
            .on("error", (err) => console.log(err))
            .end();
    }
}

export async function searchUsers(req: Request, res: Response) {
    try {
        const searchLine = req.params.search;
        const serchedUser = await DBConnect.getUsers(searchLine);

        await DBConnect.dropDBConnection();
        res.status(200).json(serchedUser).end();
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}
// export async function home(req: Request, res: Response) {
//     res.sendFile(`${__dirname}/pages/homepage.html`.replace("library", "app").replace("models", ""));
// }
// export async function styles(req: Request, res: Response) {
//     res.sendFile(`${__dirname}/styles/${req.url}`.replace("library", "app").replace("models", ""));
// }

export async function updateUser(req: Request, res: Response) {  /* TODO */ }
export async function deleteUser() { /* TODO */ }
export async function addUserFriend(req: Request, res: Response) { /* TODO */ }
export async function unFriendUser(req: Request, res: Response) { /* TODO */ }
export async function getSession(req: Request, res: Response)  /* TODO */ {}
export async function handleUserPost(req: Request, res: Response) { /* TODO */ }

export async function createAccount(req: Request, res: Response) {
    try {
        if (req.method !== "POST") throw new Error("Invalid Method!");

        const request = req.body;

        const isCredentialsValid = await system.userCredentialsValidation({
            firstName: request.user.firstName,
            lastName: request.user.lastName,
            image: request.user.image,
            cpf: request.user.cpf,
            email: request.user.email,
            password: request.user.password,
            birthday: request.user.birthday,
            phone: request.user.phone,
            profile: request.user.profile,
        });

        if (!isCredentialsValid) {
            return res.status(500).json({ message: "Erro nas credenciais." }).end();
        }

        const registred = await DBConnect.registryUser(request.bio, request.user, request.adress);
        await DBConnect.dropDBConnection();

        return res.status(200).json({ message: registred });
    } catch (error) {
        return res.status(500).redirect("http://localhost:5173");
    }
}
