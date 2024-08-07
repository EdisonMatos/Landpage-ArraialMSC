import React from "react";
import CustomTag from "../util/CustomTag";

export default function Button({
  icon,
  label,
  onClick,
  buttonLink,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
}) {
  if (size === "small") {
    sizeFeatures = "rounded-[5px] px-[18px] py-[10px]";
    textclassName = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[10px] px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  return (
    <CustomTag
      tagName={tagName}
      {...(removeTarget ? {} : { target: "_blank" })}
      {...(removeAnchor ? {} : { href: buttonLink })}
      className=""
    >
      <button
        onClick={onClick}
        // Botão alternando cor sem usar o invert
        // className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition bg-primary hover:bg-secondary hover:text-primary text-secondary hover:border-solid border-[1px] border-primary hover:border-primary`}

        // Botão com hover scale sem mudanca de cor
        className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition bg-primary text-darker  hover:scale-110`}
      >
        <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
          <div className="">{icon}</div>
          <p className={`flex items-center ${textclassName}`}>{label}</p>
        </div>
      </button>
    </CustomTag>
  );
}
