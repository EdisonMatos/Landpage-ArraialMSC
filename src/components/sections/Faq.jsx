import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import links from "../../content/links";
import content from "../../content/content";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function Faq() {
  return (
    <div className="relative bg-bgSectionDark">
      <SectionArea id="faq" className="">
        <MotionDivDownToUp className="w-full flex justify-center">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.faq.miniTag}
            sectionHeaderTitle={content.texts.faq.title}
            sectionHeaderSubtitle={content.texts.faq.subtitle}
            titleColor="text-white"
            subtitleColor="text-white opacity-70"
          />
        </MotionDivDownToUp>

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
              <AccordionExpandDefault />
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-center text-white">
              {" "}
              <a
                href={whatsappContactLink}
                target="_blank"
                className="underline transition"
              >
                {" "}
                Não achou a resposta que procurava? Fale conosco agora mesmo.
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
