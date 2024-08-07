import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function FeaturesButton() {
  return (
    <SectionArea
      id={"service"}
      className="py-[40px] tablet1:py-[64px] desktop1:py-[96px]esktop1:pb-[0px] bg-quinary"
    >
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
          <FeatureImgOnBgCardButton
            bgImg={content.texts.features.card1.img}
            title={content.texts.features.card1.title}
            description={content.texts.features.card1.subtitle}
            buttonLabel={content.texts.features.card1.buttonLabel}
            buttonLink={content.texts.features.card1.buttonLink}
          />
          <FeatureImgOnBgCardButton
            bgImg={content.texts.features.card2.img}
            title={content.texts.features.card2.title}
            description={content.texts.features.card2.subtitle}
            buttonLabel={content.texts.features.card2.buttonLabel}
            buttonLink={content.texts.features.card2.buttonLink}
          />
          <FeatureImgOnBgCardButton
            bgImg={content.texts.features.card3.img}
            title={content.texts.features.card3.title}
            description={content.texts.features.card3.subtitle}
            buttonLabel={content.texts.features.card3.buttonLabel}
            buttonLink={content.texts.features.card3.buttonLink}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
