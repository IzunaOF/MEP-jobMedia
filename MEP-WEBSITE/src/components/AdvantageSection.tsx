import AdvantageBox from "./AdvantageBox";

const AdvantageSection = () => {
    return (
        <section className="flex flex-col w-full items-center gap-16 p-6">
            <h2 className="text-4xl text-mainLittleDarkYellow">Pensando em Você</h2>
            <div className="flex flex-col items-center gap-1">
                <div className="w-[80%] flex gap-1">
                    <span className="text-mainGreenAqua">Vantagens </span> para quem está procurando
                    <span className="text-mainGreenAqua">contratar </span> um serviço
                </div>
                <div className="flex flex-col w-max px-3 py-6 z-30 T-box">
                    <div className="flex max-w-max py-3 px-1 justify-center items-center">
                        <AdvantageBox
                            title="Sem Barreiras"
                            content="Converse diretamente com quem fará o serviço"
                        />
                        <AdvantageBox
                            title="Quem é"
                            content="Ver perfil do profissional com antecedência"
                        />
                        <AdvantageBox
                            title="Projetos"
                            content="Crie projetos e anuncie para os profissionais"
                        />
                        <AdvantageBox
                            title="Verification"
                            content="Confiança no contrato. Perfis cadastrados verificados."
                        />
                    </div>
                    <span className="text-md font-kurale pb-3 pt-8 text-xs">
                        Tudo em um só lugar. Pague, Contrate e Crie projetos no seu telefone.
                        <strong className="text-mainLittleDarkYellow"> Baixe o APP</strong>
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="w-[80%] flex gap-1">
                    <span className="text-mainGreenAqua">Vantagens </span>Vantagens para quem está procurando
                    <span className="text-mainGreenAqua">anunciar </span>seu trabalho um serviço
                </div>
                <div className="flex flex-col w-max px-3 py-6 z-30 T-box">
                    <div className="flex max-w-max py-3 px-1 justify-center">
                        <AdvantageBox
                            title="Meu Hobby Minha Renda"
                            content="Nós ajudamos te ajudamos a fazer o que você ama, do jeito que você gosta."
                        />
                        <AdvantageBox
                            title="No Controle"
                            content="Projetos e serviços a seu critério. Aceite apenas o que quiser."
                        />
                        <AdvantageBox
                            title="Dinheiro no Bolso"
                            content="como você prefere receber: cartão, espécie, pix ou pelo
                                App ? você decide."
                        />
                        <AdvantageBox
                            title="Você na Comunidade"
                            content="  Seja vizinho. Descubra liberdade e flexibilidade de ter comunicação constante com
                                toda a comunidade Local."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantageSection;
