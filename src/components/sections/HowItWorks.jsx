import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HowItWorks() {
  return (
    <div
      id="service"
      className="w-full flex flex-col items-center pb-[40px] tablet1:pb-[64px] desktop1:pb-[96px]"
    >
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Como funciona?"
        sectionHeaderSubtitle="Com apenas alguns passos, o seu problema está resolvido"
      />
      <SectionWrapper>
        <div>
          <MotionDivDownToUp>
            <div className="flex flex-col items-center desktop1:flex-wrap desktop1:flex-row justify-evenly w-full gap-[36px] tablet1:gap-[24px] font-mainFont mt-[42px] desktop1:mt-0">
              <div className="flex flex-col justify-center items-center w-[270px] hover:scale-110 transition mb-[32px] desktop1:mb-0">
                <div className="bg-red-600 mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[25px] w-[25px] text-white text-title3 font-semibold">
                  1
                </div>
                <h1 className="text-[21px] font-semibold mb-[24px]">
                  Baixe nosso app
                </h1>
                <p className="text-[16px] opacity-65 text-center">
                  Localize a nossa unidade de recebimento mais próxima de você
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[270px] hover:scale-110 transition mb-[32px] desktop1:mb-0">
                <div className="bg-[#68D585] mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[25px] w-[25px] text-white text-title3 font-semibold">
                  2
                </div>
                <h1 className="text-[21px] font-semibold mb-[24px]">
                  Faça sua compra
                </h1>
                <p className="text-[16px] opacity-65 text-center">
                  Insira o endereço da nossa unidade como local de recebimento
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[270px] hover:scale-110 transition mb-[32px] desktop1:mb-0">
                <div className="bg-[#473BF0] mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[25px] w-[25px] text-white text-title3 font-semibold">
                  3
                </div>
                <h1 className="text-[21px] font-semibold mb-[24px]">
                  Retire ou receba
                </h1>
                <p className="text-[16px] opacity-65 text-center">
                  E pronto! Você com seus produtos em mãos independente da sua
                  localização
                </p>
              </div>
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </div>
  );
}
