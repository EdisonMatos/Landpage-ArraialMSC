import Button from "../interactives/Button";

export default function ServiceDetailCard(props) {
  const { img, subtitle, description, buttonLabel, buttonIcon, buttonLink } =
    props;

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <div className="w-full">
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className="w-[100%] h-[180px] phone2:h-[230px] phone3:h-[250px] desktop1:h-[300px] bg-no-repeat bg-top bg-cover"
        />
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <h1 className="font-bold text-title1 text-black">{subtitle}</h1>
          <p>{description}</p>
        </div>
        <div className="">
          <Button
            label={buttonLabel}
            icon={buttonIcon}
            buttonLink={buttonLink}
          />
        </div>
      </div>
    </div>
  );
}
