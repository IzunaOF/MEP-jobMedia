import { Masks } from "../types/basicInterfaces";

export default class Utils {
    private verifiableFields: Array<string>;
    public mask;
    private templates;
    constructor(verifiableFields: Array<string>) {
        this.mask = new Map();
        this.templates = new Map();
        this.verifiableFields = verifiableFields;
        this.geneterateMasks();
    }
    private geneterateMasks() {
        
        this.verifiableFields.map((cm) => {
            switch (cm) {
                case "cpf":
                    this.mask.set("cpf", {
                        validate: (cpf = "") => {
                            const calcCpf: any = cpf.replace(/[\.\-]/g, "");
                            const rx = new RegExp(/\d{3}\.\d{3}\.\d{3}\-\d{2}/);

                            let first = 0;
                            let second = 0;

                            for (let i = 0; i < 9; i++) first += calcCpf.charAt(i) * (10 - i);
                            for (let j = 0; j < 10; j++) second += calcCpf.charAt(j) * (11 - j);
                            const digit = (s: number, x: number) =>
                                s % 11 < 2 ? 0 : 11 - (s % 11) == calcCpf.charAt(x);

                            return digit(first, 9) && digit(second, 10) && rx.test(cpf);
                        },
                    });
                    break;
                case "email":
                    this.mask.set("email", {
                        validate: (email: string) => {
                            const rx = new RegExp(/[\w]+\@([\w]+\.)+\w/);
                            return rx.test(email);
                        },
                    });
                case "phone":
                    this.mask.set("phone", {
                        validate: (phone: string) => {
                            const rx = new RegExp(/^(\(\d{2}\))*\d{5}-\d{4}$/);
                            return rx.test(phone);
                        },
                    });
                    break;
                case "dateFormat":
                    this.mask.set("dateFormat", {
                        validate: (date: string) => {
                            const rx = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/);
                            return rx.test(date);
                        },
                    });
                    break;
                default:
                    this.mask.set("name", {
                        validate: (name: string) => {
                            const rx = new RegExp(/\D{3,}/);
                            return rx.test(name);
                        },
                    });
                    break;
            }
        });
    }
    public createNewMask({ maskName, regex }: Masks) {
        this.mask.set(maskName, {
            validate: (line: string) => {
                const rx = new RegExp(regex);
                return rx.test(line);
            },
        });
    }
    public createNewVerification(maskName:string,callbackFn: Function ) {
        this.mask.set(maskName, {
            callbackFn:  callbackFn,
        });
    }
    public useMask(maskName: string) {
        return this.mask.get(maskName);
    }
    public getMaskTeamplate(mask: RegExp) {
        return this.templates.get(mask);
    }
}