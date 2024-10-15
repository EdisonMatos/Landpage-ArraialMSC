import { useState } from "react";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import content from "../../content/content";
import Button from "../interactives/Button";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";
import imgLaw from "../../assets/imgs/hero/lawHero.jpg";
import imgPoints from "../../assets/imgs/about/points.png";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ReservationWhats from "../../components/sectionElements/ReservationWhats";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function HeroBgImg() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Passeio de barco");
    setModalContent(
      <p>
        <div class="text-paragraph5 font-bold mb-4">🛳️ ROTEIRO:</div>
        <ul class="list-disc list-inside space-y-2 text-paragraph3">
          <li>
            Prainhas do Pontal do Atalaia: Gruta do Amor e a escadaria (⏱️
            Desembarque de 40 min)
          </li>
          <li>Ilha do Farol (⏱️ Desembarque de 20 min)</li>
          <li>Fenda de Nossa Senhora (👀 Passagem panorâmica)</li>
          <li>Perfil do Gorila (👀 Passagem panorâmica)</li>
          <li>Gruta Azul (👀 Passagem panorâmica)</li>
          <li>Impacto do Meteorito (👀 Passagem panorâmica)</li>
          <li>Praia do Forno (⏱️ Parada na enseada por 15 min)</li>
        </ul>

        <div class="text-paragraph5 font-bold mt-8 mb-4">
          ℹ️ INFORMAÇÕES GERAIS:
        </div>
        <ul class="list-disc list-inside space-y-2 text-paragraph3">
          <li>Nosso passeio tem duração de 3h30/4h.</li>
          <li>
            Nossas embarcações possuem banheiros masculino e feminino, música
            ambiente 🎶, e bar à bordo 🍹.
          </li>
          <li>
            Conforme a lei 2.348/12nov de 2021, é proibida a entrada de coolers
            e demais recipientes nas embarcações de turismo que utilizam a
            Marina dos Pescadores.
          </li>
          <li>
            Temos todos os equipamentos de salvatagem exigidos pela Marinha do
            Brasil (devidamente higienizados) 🚤.
          </li>
          <li>
            Caso não haja condições de desembarque ou visitação de algum local
            descrito acima devido às condições do mar, compensaremos o tempo em
            outro ponto turístico, se possível 🌊.
          </li>
          <li>
            O roteiro pode sofrer alterações sem aviso prévio, com o capitão da
            embarcação tendo total liberdade para ajustá-lo, visando sempre a
            segurança e bem-estar de nossos passageiros 🚤😊.
          </li>
          <li>
            👶 Crianças até 3 anos não pagam (todas contam como passageiros).
          </li>
          <li>
            🍢 Serviços de bordo pagos à parte: refrigerantes, cervejas, água de
            garrafinha, espetinhos, drinks.
          </li>
          <li>
            👜 Solicitamos que os passageiros venham com o mínimo de bolsas, não
            nos responsabilizamos pelas mesmas.
          </li>
        </ul>

        <div class="text-paragraph5 font-bold mt-8 mb-4">⏰ HORÁRIO:</div>
        <p className="text-paragraph3">
          Nosso passeio sai a partir das 09:30 (favor confirmar o horário).
          Pedimos que cheguem para o check-in com 1 hora de antecedência.
          Lembre-se: a cidade fica sempre lotada e com bastante trânsito 🚦,
          então saiam cedo para evitar perder o passeio. Caso perca o horário, o
          valor não é reembolsado. O reembolso só será feito em caso de
          cancelamento do passeio por motivos climáticos 🌧️.
        </p>

        <div class="text-paragraph5 font-bold mt-8 mb-4">📞 PARA RESERVAR:</div>
        <p className="text-paragraph3">
          A reserva só é feita mediante pagamento.
        </p>
        <MotionDivDownToUp>
          <div className="flex justify-start w-full mt-[16px]">
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
        </MotionDivDownToUp>

        <div class="text-red-600 font-bold mt-[15px] mb-4 text-paragraph3">
          🔴 Cada passageiro deverá pagar uma taxa de embarque de R$ 10,00
          dentro do píer para acesso à embarcação (pagamento somente em DINHEIRO
          no local). Menores de 6 anos e maiores de 60 anos não pagam a taxa 🔴.
        </div>

        <div class="text-red-600 font-bold text-paragraph3">
          ⚠️ Obs: É proibido entrar com cooler, bolsa térmica ou semelhantes.
          Garrafas ou copos de vidro também são proibidos. O check-in é feito na
          agência.
        </div>
      </p>
    );
    setVisible(true);
  };

  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover font-mainFont"
      style={{
        backgroundImage: `url(${content.texts.hero.images.background})`,
      }}
      id="home"
    >
      <div className="relative z-10 flex flex-col w-full bg-black bg-opacity-40 desktop2:bg-opacity-10 items-left ">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] desktop3:h-[140px]" />
          <div className="flex flex-col mx-auto w-[90%] max-w-[1215px] items-center pt-[46px] pb-[20px] desktop1:pt-[120px]">
            <div className=" flex flex-col w-full desktop1:w-[60%] ">
              <MotionDivDownToUp>
                <div className="w-auto text-center font-secondFont phone1:text-paragraph4">
                  <p className=" bg-black bg-opacity-50 text-lighter rounded-2xl px-[16px] inline-block text-paragraph2">
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="text-lighter flex justify-center text-title4 phone2:text-title5 phone3:text-title5 leading-[36px] phone3:leading-[40px] tablet1:leading-[60px] tablet1:text-title7 desktop1:title5 tablet1:justify-center font-bold text-center ">
                  <h1 className="[text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                    {content.texts.hero.title}
                  </h1>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-center text-center phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                  <p className="text-lighter mb-[32px] opacity-100 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivDownToUp>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <MotionDivDownToUp>
                  <div className="flex justify-center w-full">
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
                </MotionDivDownToUp>
                <MotionDivDownToUp className="mt-[40px] w-full ">
                  <a href="#" className="flex justify-center" onClick={onClick}>
                    <p className="text-center text-white underline transition hover:scale-125 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)]">
                      {content.texts.hero.secondaryCta}
                    </p>
                  </a>
                </MotionDivDownToUp>
              </div>
              {/* <div className="">
                <MotionDivDownToUp>
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
                </MotionDivDownToUp>
              </div> */}
            </div>
            <div className="hidden">
              <MotionDivDownToUp className="relative flex justify-end">
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
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
        <ReservationWhats className="pb-[46px] relative top-[50%] desktop3:top-[74%] desktop1:pb-[120px]" />
      </div>

      {/* <div className="bg-black bg-opacity-40 desktop2:bg-opacity-10">
        <div class="custom-shape-divider-bottom-1722451194 ">
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

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </div>
  );
}
