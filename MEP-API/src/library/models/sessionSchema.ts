import crypto from "crypto";
import type { Profile } from "../types/basicInterfaces";

export type TSession = {
    profileId: null | string;
    profileName: null | string;
    email: null | string;
    token: string | null;
    status: boolean;
    cookies: [];
};

type UserSession = {
    firstName: string | null;
    lastName: string | null;
    image: string | null;
    email: string | null;
    phone: string | null;
    profile: Profile;
};

export default class Session {
    private userSession: Array<UserSession>;
    private status: TSession;

    constructor(session?: TSession) {
        this.status = session || {
            profileId: null,
            profileName: null,
            email: null,
            token: "",
            status: false,
            cookies: [],
        };
        this.userSession = new Array(1).fill(null);
    }

    public getSession() {
        return this.status;
    }

    public setSession(user: UserSession) {
        const u = this.userSession.fill(user)[0];
        const s = this.status;
        s.profileId = u.profile.id;
        s.profileName = u.firstName;
        s.email = u.email;
        s.token = crypto.randomUUID();
        s.status = true;
        s.cookies = [];
        return true;
    }

    public dropSession() {
        this.userSession.fill({
            firstName: null,
            lastName: null,
            image: null,
            email: null,
            phone: null,
            profile: {
                id: null,
                bio: null,
                rating: 0,
            },
        });
        const s = this.status;
        s.profileId = null;
        s.profileName = null;
        s.email = null;

        s.token = null;
        s.status = false;
        s.cookies = [];
    }
    public sessionControl() {}
}
