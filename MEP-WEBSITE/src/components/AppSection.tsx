import Winds from "./Winds";
import downloadApp from "@/assets/downloadAppTransparent.png";
const AppSection = () => {
    return (
        <section className="flex flex-col gap-1 items-center justify-center relative w-full h-max">
            <h3 className="text-3xl text-mainLittleDarkYellow">Me Leva no Bolso</h3>
            <Winds />

            <div className="flex py-32 flex-col ">
                <div className="flex p-3 items-center">
                    <img
                        src={downloadApp}
                        alt="APP"
                    />
                    <ul className="relative w-max font-medium text-md leading-10 text-xl text-left p-8 border-r border-b border-customBorderColor rounded-br-[125px]">
                        <li className="text-minimunBlue pl-2 w-max">Crie Seu Projeto</li>
                        <li>Inicie Projeto</li>
                        <li className="text-minimunBlue pl-2 w-max">Procure e Anuncie</li>
                        <li>Gerencie Sua Agenda De Compromissos</li>
                        <li className="text-minimunBlue pl-2 w-max">Cuide de Seus Gastos</li>
                        <li>Realize Saque e Pagamentos</li>
                    </ul>
                </div>

                <div>
                    <span>saiba mais </span> --
                    <button
                        className="pointer ml-2 customButton bg-custtomBGButton hover:bg-mainBGHover"
                        type="button">
                        Download
                        <span>on Google Play</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AppSection;
