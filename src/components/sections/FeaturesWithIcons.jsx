import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Icon1 from "../../assets/imgs/icons/icon1.webp";
import Icon2 from "../../assets/imgs/icons/icon2.webp";
import Icon3 from "../../assets/imgs/icons/icon3.webp";
import Icon4 from "../../assets/imgs/icons/icon4.webp";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="" paddingbot={false}>
      <MotionDivDownToUp className="w-full flex justify-center">
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color="dark"
        />
      </MotionDivDownToUp>
      <SectionWrapper>
        <div className="flex flex-col items-center justify-between w-full tablet1:flex-row">
          <div className="col1">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={<img src={Icon1} alt="" />}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className="tablet1:mb-[46px]"
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={<img src={Icon2} alt="" />}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
              />
            </MotionDivDownToUp>
          </div>
          <MotionDivDownToUp className="w-full flex justify-center">
            <div className="hidden h-auto desktop1:flex justify-center w-full col2">
              <img
                src={content.texts.features.imgFeatures}
                alt="Imagem ilustrativa da seção"
              />
            </div>
          </MotionDivDownToUp>
          <div className="col3 ">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={<img src={Icon3} alt="" />}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className="tablet1:mb-[46px]"
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={<img src={Icon4} alt="" />}
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
              />
            </MotionDivDownToUp>
          </div>
        </div>
        <img
          src={content.texts.features.imgDivisor}
          className="p-[84px]"
          alt="Imagem de divisão em formato de onda"
        />
      </SectionWrapper>
    </SectionArea>
  );
}
