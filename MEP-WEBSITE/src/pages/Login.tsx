import sculture from "@/assets/sculture.jpg";
import GitHubIcon from "../assets/github-icon-white-6.jpg";
import GoogleIcon from "../assets/Gmail.png";
import LinkedInIcon from "../assets/LinkedIn.png";
import { useCallback, useState, ChangeEvent } from "react";
import RegistryPage from "./registryPage/RegistryPage";
import { useAppDispatch, useAppSelector } from "@/hooks/appHooks";
import { login, logout } from "@/app/storeSlices/session";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [registryType, setResgistryType] = useState<string>("provider");
    const [loginCredentials, setLoginCredentials] = useState({
        login: "111.444.777-3",
        password: "Test*123",
    });

    if (loginCredentials.login) {
        const [isValid, setIsValid] = useState<any>(null);

        useEffect(() => {
            axios
                .post("http://localhost:3000/signIn", loginCredentials)
                .then((res) => setIsValid(res.status))
                .catch((err) => {
                    console.log(new Error("Login Inválido").message);
                })
                .finally(() => console.log("request encerrado"));

            return () => setIsValid(null);
        }, [loginCredentials]);
        if (isValid == 201) {
            navigate("/");
        }
    }

    const storeDispatch = useAppDispatch();

    const resgisterAs = useCallback(
        (ev: React.MouseEvent<HTMLButtonElement>) => {
            const type = ev.currentTarget.name;
            console.log(type);
            setIsLogin(false);
            setResgistryType(type);
        },
        [registryType]
    );

    const singIn = useCallback(
        (ev: ChangeEvent<HTMLInputElement>) => {
            const name = ev.target.name;
            const value = ev.target.value;
            setLoginCredentials((prev) => {
                return { ...prev, [name]: value };
            });
        },
        [loginCredentials]
    );

    return (
        <>
            <div className="w-full h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/60"></div>
                <img
                    className="fixed -z-10 max-sm:scale-0 w-full max-w-fit"
                    src={sculture}
                    alt="sculture"
                />
                {isLogin && (
                    <div className="flex flex-col gap-10 rounded-xl absolute top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-2/3 max-md:w-4/5 lg:w-1/2 h-max p-10 bg-black/60 items-center justify-center">
                        <span className="text-4xl text-mainLittleDarkYellow">Sign In</span>
                        <div className="flex flex-col gap-6 w-full md:w-3/5">
                            <input
                                className="p-2 font-nokora bg-black/50 text-white rounded-xl"
                                type="text"
                                name="login"
                                value={loginCredentials.login}
                                placeholder="Login"
                                onChange={singIn}
                            />
                            <input
                                className="p-2 font-nokora bg-black/50 text-white rounded-xl"
                                type="text"
                                name="password"
                                value={loginCredentials.password}
                                placeholder="Password"
                                onChange={singIn}
                            />
                        </div>
                        <button
                            type="button"
                            className="font-nokora text-xl py-1 px-12 rounded-xl hover:bg-mainGreenAqua border-2 border-mainGreenAqua"
                            onClick={() => storeDispatch(login(loginCredentials))}>
                            Login
                        </button>
                        <div className="flex gap-8 ">
                            <img
                                className="object-contain hover:scale-110"
                                width={25}
                                src={GoogleIcon}
                                alt="Google"
                            />
                            <img
                                className="object-contain hover:scale-110"
                                width={25}
                                src={GitHubIcon}
                                alt="GitHub"
                            />
                            <img
                                className="object-contain hover:scale-110"
                                width={25}
                                src={LinkedInIcon}
                                alt="LinkedIn"
                            />
                        </div>
                        <div>
                            Still no Account? Create Now
                            <p className="flex gap-2">
                                <button
                                    type="button"
                                    name="provider"
                                    onClick={resgisterAs}
                                    className="text-mainLittleDarkYellow">
                                    as Provider
                                </button>
                                or
                                <button
                                    type="button"
                                    name="contractor"
                                    onClick={resgisterAs}
                                    className="text-mainLittleDarkYellow">
                                    as Contractor
                                </button>
                            </p>
                        </div>
                    </div>
                )}
                {!isLogin && registryType === "provider" && (
                    <RegistryPage
                        domain={registryType}
                        dispatch={setIsLogin}
                    />
                )}
                {!isLogin && registryType === "contractor" && (
                    <RegistryPage
                        domain={registryType}
                        dispatch={setIsLogin}
                    />
                )}
            </div>
        </>
    );
};

export default Login;
