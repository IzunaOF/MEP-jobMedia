import "@/styles/concepts/breklines.css";

import whatsapp from "@/assets/WhatsApp.png";
import facebook from "@/assets/fb_icon.png";
import email from "@/assets/Gmail.png";
import arrow from "@/assets/arrowMEP.png";
import List from "./List";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center gap-16 py-32 bg-tripleBoxBackground">
            <ul className="flex gap-12 ">
                <li className="hover:text-mainColorHover cursor-pointer">Ferramentas Online</li>
                <li className="hover:text-mainColorHover cursor-pointer">Cartilhas</li>
                <li className="hover:text-mainColorHover cursor-pointer">Comunidade Online</li>
            </ul>
            <div className="flex gap-36 align-baseline relative">
                <div className="flex gap-12">
                    <div className="flex min-w-max items-center flex-col gap-4">
                        <h2 className="text-minimunBlue text-2xl">Meu Eu Profissional</h2>
                        <img
                            width="10"
                            src={arrow}
                            alt="arrow"
                        />
                        <ul className="line-h-30">
                            <li className="hover:text-mainColorHover cursor-pointer">Com Funciona</li>
                            <li className="hover:text-mainColorHover cursor-pointer">Segurança de Dados</li>
                            <li className="hover:text-mainColorHover cursor-pointer">Como Usar O Chat</li>
                        </ul>
                    </div>

                    <img
                        className="rotate-90 w-[20px] h-[50px]"
                        src={arrow}
                        alt="arrow"
                    />

                    <div className="flex w-full flex-col gap-3">
                        <span className="text-minimunBlue">Contatos</span>
                        <ul>
                            <List
                                image={email}
                                alt="Email"
                                href="mailto:meueuprofissional@gmail.org.com"
                                hrefText="Meu Eu Profissional"
                            />
                            <List
                                image={whatsapp}
                                alt="Whatsapp"
                                href="tel:+55 (48) 99874-5623"
                                hrefText="(48) 99874-5623"
                            />
                        </ul>
                        <span className="text-minimunBlue">Redes Sociais</span>
                        <ul>
                            <List
                                image={facebook}
                                alt="Facebook"
                                href="http://localhost:3000/#"
                                hrefText="MeuEuProfissionalOF"
                            />
                        </ul>
                    </div>
                </div>

                <div className="brekLine"></div>
                <div className="brekLine n2"></div>
                <div className="brekLine n3"></div>
                <div className="brekLine n4"></div>

                <div className="flex flex-col">
                    <span>Dúvidas Frequentes</span>
                    <ul className="w-max max cursor-pointer">
                        <li className="hover:text-mainColorHover">
                            <span className="text-mainGreenAqua hover:cursor-pointer">?</span>
                            como registrar meu negócio na comunidade
                        </li>

                        <li className="hover:text-mainColorHover">
                            <span className="text-mainLittleDarkYellow hover:cursor-pointer">?</span>
                            como posso contratar um profissional perto de mim
                        </li>

                        <li className="hover:text-mainColorHover">
                            <span className="text-mainGreenAqua hover:cursor-pointer">?</span>
                            politica de pagamento
                        </li>

                        <li className="hover:text-mainColorHover">
                            <span className="text-mainLittleDarkYellow hover:cursor-pointer">?</span>
                            validação e rejeição de pedidos
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
