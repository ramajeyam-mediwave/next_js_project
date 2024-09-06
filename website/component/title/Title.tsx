import React from "react";
import Router from "next/router";

interface TitleProps {
  heading1?: string;
  heading2?: string;
  content?: string;
  subcontent?: string;

  image?: any;
  btnClass1?: string;
  btntextLink1?: string;
  btntextLink2?: string;
  btnClass2?: string;
  contentClass?: string;
  btntext1?: string;
  btntext2?: string;
  addClass?: string;
  PositionTopBottom?: boolean;
  addHeaderStyle?: string;
}
export const Title: React.FC<TitleProps> = ({
  heading1,
  heading2,
  content,
  contentClass,
  subcontent,
  addClass,
  PositionTopBottom,
  addHeaderStyle,
}) => {
  return (
    <div className={addClass}>
      <div className="title_section mb-10">
        <span
          className={`gap-2 animate-heading ${
            PositionTopBottom ? "block" : "xl:flex justify-center"
          }`}
        >
          {heading1 && (
            <h2
              className={
                addHeaderStyle
                  ? ""
                  : `text-primaryHeading ${PositionTopBottom && "!leading-8"}`
              }
            >
              {heading1}
            </h2>
          )}
          {heading2 && <h2 className={addHeaderStyle}>{heading2}</h2>}
        </span>
        <div className={`${contentClass ? contentClass : ""}`}>
          <p className="animate-subtitle">{content}</p>
          {subcontent && <p>{subcontent}</p>}
        </div>
      </div>
    </div>
  );
};
