export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className } = props;

  return (
    <div
    className={` tablet1:h-[300px] desktop1:h-[350px] desktop2:h-[320px] desktop3:h-[300px] desktop1:w-[full] des flex flex-col items-center desktop1:hover:scale-110 transition p-[18px] ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] rounded-lg flex justify-center items-center text-secondary">
        {icon}
      </div>
      <h1 className="font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[70%]">
        {paragraph}
      </p>
    </div>
  );
}
