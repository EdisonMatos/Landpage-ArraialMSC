import React, { useState } from "react";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import links from "../../content/links";
import Button from "../interactives/Button";

export default function AboutMockUpSocial() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

  return (
    <SectionArea className="bg-quinary">
      <SectionWrapper className="flex flex-col-reverse desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
              {content.texts.about.aboutSocial.title}
            </SectionTitles>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="mb-[36px] phone3:mb-[60px] desktop1:mb-[68px]">
              {content.texts.about.aboutSocial.paragraph}
            </Paragraphs>
          </MotionDivDownToUp>
          <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <MotionDivDownToUp>
              <div className="w-full">
                <Button
                  label="Me siga no Instagram"
                  buttonLink={links.socialMedia.instagram}
                  className="w-full"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  }
                />
              </div>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <div className="w-full">
                <Button
                  className="w-full"
                  label="Me siga no Facebook"
                  buttonLink={links.socialMedia.facebook}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  }
                />
              </div>
            </MotionDivDownToUp>
          </div>
        </div>

        <MotionDivDownToUp className="hidden desktop1:block desktop1:w-[360px] desktop2:w-[450px]">
          <img
            // onClick={handleClick}
            src={content.texts.about.aboutSocial.img.img}
            alt={content.texts.about.aboutSocial.img.alt}
            className="w-[100%]"
          />
        </MotionDivDownToUp>
      </SectionWrapper>
      <Dialog
        header="Me siga nas redes sociais"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0">Conteúdo a ser adicionado</p>
      </Dialog>
    </SectionArea>
  );
}
