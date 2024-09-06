import React from "react";
import Image from "next/image";
import { Button } from "../../button/Button";

interface InfoCardProps {
  heading1: string;
  heading2: string;
  content: string;
  image: any;
  infoContent?: string;
  btntext?: string;
  addClass?: string;
  OnClick?: any;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  heading1,
  heading2,
  content,
  image,
  infoContent,
  btntext,
  addClass,
  OnClick,
}) => {
  return (
    <>
      <section className={`multicard_main ${addClass ? addClass : ""}`}>
        <div className="multi_head">
          <span className="multi_heading title_section animate-heading">
            {heading1 && <h2 className=" text-primaryHeading">{heading1}</h2>}
            {heading2 && <h2>{heading2}</h2>}
          </span>

          <p className="animate-subtitle">{content}</p>
        </div>
        <div className={`infocard_body`}>
          <div className="info_img">
            <Image
              src={image}
              alt="Picture of the author"
              width={1500}
              height={500}
            />
          </div>
          <p className="infoContent">{infoContent}</p>
          <div className="info_btn_block">
            <Button
              addclass="primary-btn"
              OnClick={OnClick}
              btntext={btntext}
            />
          </div>
        </div>
      </section>
    </>
  );
};
