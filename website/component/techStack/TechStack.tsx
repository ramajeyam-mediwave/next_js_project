import React from "react";
import Image, { StaticImageData } from "next/image";
import { Title } from "../title/Title";

interface TechStackProps {
  heading1: string;
  heading2: string;
  content?: string;
  data?: Array<{
    id?: string;
    imgage?: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
  }>;
}

const TechStack = ({ heading1, heading2, content, data }: TechStackProps) => {
  return (
    <>
      <Title
        addHeaderStyle="text-primaryHeading"
        addClass="text-center title_para small-letters"
        heading1={heading1}
        heading2={heading2}
        content={content}
      />
      <div className="flex gap-16 justify-center flex-wrap mv-container pb-48">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="stackContainer"
              style={item.style || {}}
            >
              {item.imgage && (
                <Image
                  src={item.imgage}
                  alt={`${item.alt}`}
                  width={item.width}
                  height={item.height}
                  // layout="responsive"
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default TechStack;
