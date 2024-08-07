import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function Features() {
  return (
    <SectionArea id="service" className="bg-quinary desktop1:pb-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card1.img}
            title={content.texts.features.card1.title}
            description={content.texts.features.card1.subtitle}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card2.img}
            title={content.texts.features.card2.title}
            description={content.texts.features.card2.subtitle}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card3.img}
            title={content.texts.features.card3.title}
            description={content.texts.features.card3.subtitle}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card4.img}
            title={content.texts.features.card4.title}
            description={content.texts.features.card4.subtitle}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
