export default function HowItWorksCard({ number, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center desktop1:items-start w-full font-mainFont desktop1:hover:scale-110 transition">
      <div className="bg-buttonColor mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-secondary text-title1 font-semibold">
        {number}
      </div>
      <h1 className="text-[20px] text-secondary font-bold mb-[24px]">
        {title}
      </h1>
      <p className="text-[16px] text-black opacity-70 text-center desktop1:text-left ">
        {description}
      </p>
    </div>
  );
}
