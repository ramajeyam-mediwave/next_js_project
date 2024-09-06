import React from "react";
import Image from "next/image";
import { Button } from "../../button/Button";
import HeroImage from "../../../asset/image/app-stacked.png";
import Router from "next/router";
import Link from "next/link";

interface HerocardProps {
  heading1?: string;
  heading2?: string;
  heading3?: string;
  content?: string;
  subcontent?: string;

  image?: any;
  addClass?: string;
  btnClass1?: string;
  btntextLink1?: string;
  btntextLink2?: string;
  btnClass2?: string;
  btntext1?: string;
  btntext2?: string;
  UKheader?: boolean;
}
export const Herocard: React.FC<HerocardProps> = ({
  heading1,
  heading2,
  heading3,
  content,
  image,
  addClass,
  btntext1,
  btntextLink1,
  btntextLink2,
  btntext2,
  btnClass1,
  btnClass2,
  subcontent,
  UKheader = false,
}) => {
  return (
    <>
      {UKheader ? (
        <section className={`hero_section ${addClass ? addClass : ""}`}>
          <div className="herocard_content_section pr-8">
            <span className="card_heading">
              <h1>
                {heading1 && <span className=" text-8xl">{heading1}</span>}
                {heading2 && <span className=" text-8xl">{heading2}</span>}
                {heading3 && <span className=" text-8xl">{heading3}</span>}
              </h1>
            </span>
            <p className="herocard_content">{content}</p>
            {subcontent && <p className="herocard_content">{subcontent}</p>}

            <div className="btn_space">
              {btntext1 && (
                <Link
                  className="btn primary-btn"
                  href={`${btntextLink1}`}
                  target="_blank"
                >
                  {btntext1}
                </Link>
              )}
              {btntext2 && (
                <Link
                  className="btn secondary-btn"
                  href={`${btntextLink2}`}
                  target="_blank"
                >
                  {btntext2}
                </Link>
              )}
            </div>
          </div>
          {/* <div className="img_hero">{image}</div> */}
          <div className="img_hero">
            <Image
              src={HeroImage}
              alt="Apps we have developed represented in mobile mockup."
              width={500}
              height={500}
              className="img_section"
            />
          </div>
        </section>
      ) : (
        <section
          className={`hero_section ${image ? "" : "!grid-cols-1"} ${
            addClass ? addClass : ""
          }`}
        >
          <div className="herocard_content_section pr-8">
            <span className="card_heading">
              <h1>
                {heading1 && <span className="text-8xl ">{heading1}</span>}
                {heading2 && (
                  <span
                    className={`text-8xl ${
                      heading3 ? "text-primaryHeading" : ""
                    }`}
                  >
                    {heading2}
                  </span>
                )}
                {heading3 && (
                  <span className=" text-8xl block !text-primaryContent ">
                    {heading3}
                  </span>
                )}
              </h1>
            </span>
            <p className="herocard_content">{content}</p>
            {subcontent && <p className="herocard_content">{subcontent}</p>}

            <div className="btn_space">
              {btntext1 && (
                <Button
                  addclass={btnClass1}
                  btntext={btntext1}
                  OnClick={() => Router.push(`${btntextLink1}`)}
                />
              )}
              {btntext2 && (
                <Button
                  addclass={btnClass2}
                  btntext={btntext2}
                  OnClick={() => Router.push(`${btntextLink2}`)}
                />
              )}
            </div>
          </div>
          {image && <div className="img_hero">{image}</div>}
        </section>
      )}
    </>
  );
};
