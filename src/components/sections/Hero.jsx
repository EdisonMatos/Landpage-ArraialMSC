import links from "../../content/links";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import content from "../../content/content";
import bgHeroImg from "../../assets/imgs/hero/bgHeroPattern.png";
import Button from "../interactives/Button";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";
import imgLaw from "../../assets/imgs/hero/lawHero.jpg";
import SectionArea from "../sectionElements/SectionArea";
import imgPoints from "../../assets/imgs/about/points.png";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function Hero() {
  return (
    <div
      className="w-full bg-center bg-repeat font-mainFont bg-gradient-to-b from-black to-bgSectionDark bg-bgSectionDark"
      // style={{ backgroundImage: `url(${bgHeroImg})` }}
      id="home"
    >
      <div className="relative z-10 flex w-full bg-black bg-opacity-0 items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] desktop3:h-[140px]" />
          <div className="flex phone1:flex-col desktop1:flex-row mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] pt-[46px] desktop1:pt-[68px] desktop1:pb-[96px]">
            <div className="flex flex-col w-full desktop1:w-[60%] desktop1:mr-[20px]">
              <MotionDivLeftToRight>
                <div className="w-auto text-center desktop1:text-left font-secondFont phone1:text-paragraph4">
                  <p className="mb-[16px] bg-secondary bg-opacity-25 text-lighter rounded-2xl px-[16px] py-[6px] inline-block text-paragraph2">
                    ADVOGADO DE FAMÍLIA E DO CONSUMIDOR EM BH - MG
                  </p>
                </div>
              </MotionDivLeftToRight>
              <MotionDivLeftToRight>
                <div className="text-lighter flex  justify-center tablet1:justify-start font-bold leading-[46px] phone3:leading-[50px] tablet1:leading-[60px] desktop1:leading-[60px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7">
                  <h1 className="">{content.texts.hero.title}</h1>
                </div>
              </MotionDivLeftToRight>
              <MotionDivLeftToRight>
                <div className="flex text-center desktop1:text-left justify-left phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                  <p className="text-lighter mb-[32px] opacity-80">
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivLeftToRight>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <MotionDivLeftToRight>
                  <div className="flex justify-center w-full desktop1:justify-start">
                    <Button
                      aria-label={content.texts.hero.ctaButtonAriaLabel}
                      label={content.texts.hero.ctaButtonText}
                      buttonLink={whatsappContactLink}
                      className="w-[100%]"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-whatsapp"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                      }
                    />
                  </div>
                </MotionDivLeftToRight>
              </div>
              {/* <div className="">
                <MotionDivLeftToRight>
                  <p className="mb-[20px]">Baixe nosso app:</p>
                  <div className="">
                    {" "}
                    <div className="flex items-start gap-[20px]">
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgAppStore}
                          alt="Botão para a App Store"
                          className=""
                        />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgGooglePlay}
                          alt="Botão para a Google Play"
                          className=""
                        />
                      </a>
                    </div>
                  </div>
                </MotionDivLeftToRight>
              </div> */}
            </div>
            <div className="hidden desktop1:flex">
              <MotionDivRightToLeft className="relative flex justify-end">
                {/* <img
                  src={imgLaw}
                  alt="Foto de itens do direito"
                  className="bg-red-500 "
                /> */}
                <img
                  src={imgLaw}
                  alt="Foto de itens que representam a profissão de advogado"
                  className="w-[80%] rounded-3xl"
                ></img>
                <img
                  src={imgPoints}
                  alt="Imagem de efeito pontilhado"
                  className="absolute opacity-75 phone1:right-[-10px] phone1:top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
                ></img>
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black bg-opacity-0">
        <div class="custom-shape-divider-bottom-1720203688">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}
    </div>
  );
}
