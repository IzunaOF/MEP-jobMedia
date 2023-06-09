import { useState, useCallback } from "react";
import Provider from "./Requirements/Perfil";
import Adress from "./Requirements/Adress";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import Contacts from "./Requirements/Contacts";
import Contractor from "./Requirements/ContractorPerfil";

type RegistryProps = {
    domain: string;
    dispatch: Dispatch<SetStateAction<boolean>>;
};

// type RegRequires = "perfil" | "adress" | "contact";

const RegistryPage = ({ domain = "Company", dispatch }: RegistryProps) => {
    const [isPerfil, setIsPerfil] = useState<boolean>(true);
    const [isAdress, setIsAdress] = useState<boolean>(false);
    const [isContact, setIsContact] = useState<boolean>(false);
    // const [reg, setRequired] = useState<RegRequires>("perfil");

    const handleClick = useCallback((ev: React.MouseEvent) => {
        const name = ev.currentTarget.id;
        // setRequired(name == "perfil" ? "perfil" : name === "adress" ? "adress" : "contact");
        setIsPerfil(name === "perfil");
        setIsAdress(name === "adress");
        setIsContact(name === "contact");
    }, []);

    function regMenuAnimation(bool: boolean): string {
        return `w-[10px] h-[10px] absolute transition-all border-mainColorHover top-[10px] -right-[12px] ${
            bool ? "rotate-45 top-[7px] -right-[14px] border-b-4 border-r-4" : "-rotate-45  border-b-2 border-r-2 "
        }`;
    }
    function regListAnimation(bool: boolean, translate: string): string {
        return `flex flex-col absolute origin-left gap-1 p-4 ${
            bool ? "scale-100" : "scale-0"
        } transition top-[30px] ${translate} delay-100 left-1/3 w-max items-center justify-center bg-tripleBoxBackground rounded-md`;
    }

    return (
        <div className="flex font-nokora flex-col gap-10 rounded-x absolute top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-1/2 max-md:w-4/5 h-max p-10 bg-black/60 items-center justify-center">
            <p className="text-3xl text-mainLittleDarkYellow">
                Sign Up <small>as</small> <span className="text-[27px] text-minimunBlue">{domain}</span>
            </p>
            <form
                action={
                    domain === "provider"
                        ? "http://localhost:3000/createAccount"
                        : "http://localhost:3000/createAccount"
                }
                method="post"
                className="flex flex-col gap-8">
                <div>
                    <ul className="flex gap-10 text-lg ">
                        <li
                            className="relative z-30 cursor-pointer"
                            id="perfil"
                            onClick={handleClick}>
                            Perfil
                            <div className={regMenuAnimation(isPerfil)}></div>
                            <ul className={regListAnimation(isPerfil, "translate-x-[-18%]")}>
                                {isPerfil && domain === "provider" ? <Provider /> : <Contractor />}
                            </ul>
                        </li>
                        <li
                            className="relative z-20 cursor-pointer"
                            id="adress"
                            onClick={handleClick}>
                            Endereço
                            <div className={regMenuAnimation(isAdress)}></div>
                            <ul className={regListAnimation(isAdress, "translate-x-[-44%]")}>
                                {isAdress && <Adress />}
                            </ul>
                        </li>
                        <li
                            id="contact"
                            onClick={handleClick}
                            className="relative z-10 cursor-pointer">
                            Contato
                            <div className={regMenuAnimation(isContact)}></div>
                            <ul className={regListAnimation(isContact, "translate-x-[-78%]")}>
                                {isContact && <Contacts />}
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={`mt-[215px] flex flex-col gap-4`}>
                    <button
                        type="submit"
                        className={`font-nokora text-lg py-1 top-0 px-12 rounded-xl hover:bg-mainGreenAqua border-2 border-mainGreenAqua`}>
                        Submit
                    </button>
                    <div>
                        <p>
                            have an account?
                            <button
                                type="button"
                                onClick={() => dispatch((prev) => !prev)}
                                className="text-mainLittleDarkYellow ml-1">
                                Sing In
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistryPage;
