import { DBConnect } from "../../library/database";
import Utils from "../../library/models/masks";
import Session from "../../library/models/sessionSchema";
import { BasicUserSchema } from "../../library/types/basicInterfaces";

export default class SystemControl extends Utils {
    public session: Session;
    constructor(session: Session, verifiableFields: Array<string>) {
        super(verifiableFields);
        this.session = session;
    }
    public async userCredentialsValidation(user: BasicUserSchema) {
        if (
            (user.birthday ||
                user.cpf ||
                user.email ||
                user.firstName ||
                user.image ||
                user.lastName ||
                user.password) == ""
        )
            return false;

        const hasCpf = await DBConnect.verifyCPFUnicity(user.cpf);

        if (hasCpf) return false;

        const validEmail = this.useMask("email").validate(user.email);
        const validPassword = this.useMask("password").callbackFn(user.password);
        const validBirthday = this.useMask("dateFormat").validate(user.birthday);
        const validPhone = this.useMask("phone").validate(user.phone);
        const validCpf = this.useMask("cpf").validate(user.cpf);

        if (validCpf && validBirthday && validPhone && validEmail && validPassword && !hasCpf) {
            return true;
        }
        return false;
    }
}
export const system = (() => {
    return new SystemControl(
        new Session({ profileId: null, profileName: null, email: null, token: "", status: false, cookies: [] }),
        ["cpf", "email", "phone", "name", "dateFormat"]
    );
})();

system.createNewVerification("password", (line: string) => {
    if (line.length < 7 || !line.match(/[A-Z]/g) || !line.match(/[0-9]+/g) || !line.match(/[\/\.\*\#\$\-]/g))
        return false;
    return true;
});
