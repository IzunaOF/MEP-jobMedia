import Banner from "./Banner"
import StyledIcon from "./StyledIcon"
import cleaningStaff from "@/assets/cleaningStaff.png";
import tools from "@/assets/tools.png";
import business from "@/assets/business.png";

function WhatHireSection() {
  return (
    <section className="flex flex-col w-full justify-between items-center gap-28 text-minimunGreen ">
                <div className="flex flex-col gap-2 py-3">
                    <h2 className="text-4xl text-mainLittleDarkYellow">Direto ao Ponto</h2>
                    <span>Não perca tempo e filtre o que é de seu interesse.</span>
                </div>
                <div className="flex gap-10 justify-center">
                    <Banner
                        title="BUSSINESS STAFFING"
                        content="Encontre o profissional adequado pro tamanho do seu projeto, seja do zero ou apenas uma
                            reforma."
                        image={business}
                    />
                    <Banner
                        title="CONSTRUCTION & PROJECTS"
                        content="Econtre empresas ou profissionais autônomos especialistas em gestão de negócios ou afins."
                        image={tools}
                    />
                    <Banner
                        title="CLEANING"
                        content=" De terrenos e imóveis até veículos. Encontre profissionais qualificados para realizar
                            limpezas."
                        image={cleaningStaff}
                    />
                </div>
                <div className="customBorder max-w-max flex flex-col p-10 gap-4">
                    <p className="text-mainLittleDarkYellow">
                        Algo mais rápido: <span className="text-minimunBlue">Serviços mais requisitados.</span>
                    </p>

                </div>
            </section>
  )
}

export default WhatHireSection