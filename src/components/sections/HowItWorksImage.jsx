import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import links from "../../content/links";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";

export default function HowItWorksImage() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="" paddingTopAndBottom={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[60px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          {/* <div
            style={{
              backgroundImage: url(${imgHowItWorks}),
            }}
            className="relative desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[467px] rounded-2xl"
          >
            <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-75 right-[-40px] top-[40px] phone1:right-[-10px] phone1:top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img>
          </div> */}
          <img
            src={content.texts.steps.imgSteps}
            alt="Imagem de pessoa de férias em um passeio de barco em Arraial do Cabo"
            className=""
          />
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp className="flex justify-center">
            <SectionHeader
              className="hidden text-center desktop1:flex"
              miniTitle={content.texts.steps.miniTag}
              sectionHeaderTitle={content.texts.steps.title}
              color="dark"
              type="article"
            />
            <SectionHeader
              className="text-center desktop1:hidden"
              miniTitle={content.texts.steps.miniTag}
              sectionHeaderTitle={content.texts.steps.title}
              color="dark"
              type=""
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card1.stepNumber}
                  title={content.texts.steps.cards.card1.cardTitle}
                  description={content.texts.steps.cards.card1.cardDescription}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card2.stepNumber}
                  title={content.texts.steps.cards.card2.cardTitle}
                  description={content.texts.steps.cards.card2.cardDescription}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card3.stepNumber}
                  title={content.texts.steps.cards.card3.cardTitle}
                  description={content.texts.steps.cards.card3.cardDescription}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card4.stepNumber}
                  title={content.texts.steps.cards.card4.cardTitle}
                  description={content.texts.steps.cards.card4.cardDescription}
                />
              </MotionDivDownToUp>
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
      <div class="custom-shape-divider-bottom-azul mt-[64px] desktop1:mt-[96px]">
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
    </SectionArea>
  );
}