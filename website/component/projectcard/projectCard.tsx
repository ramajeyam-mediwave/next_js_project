import React from "react";
import { Button } from "../button/Button";
import Image from "next/image";
import Router from "next/router";

interface ProjectCardProps {
  heading1?: string;
  heading2?: string;
  content?: string;
  content2?: string;
  subcontent?: string;

  image?: any;
  alt?: string;
  addClass?: string;

  btnClass1?: string;
  btntextLink1?: string;
  btntextLink2?: string;
  btnClass2?: string;
  btntext1?: string;
  btntext2?: string;
  tags?: string[];
  orderClass?: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  heading1,
  heading2,
  content,
  content2,
  image,
  alt,
  addClass,
  btntext1,
  btntextLink1,
  btnClass1,
  tags,
  orderClass,
}) => {
  return (
    <div
      className={`mv-container py-16 card_item_center ${
        addClass ? addClass : ""
      }`}
    >
      <div className={`project-card ${orderClass ? orderClass : ""}`}>
        <div className="grid gap-4 text-primaryContent">
          <>{heading1 && <h3>{heading1}</h3>}</>
          <p className="animate-subtitle">{content}</p>
          <p className="animate-subtitle">{content2}</p>
        </div>
        <div className="grid gap-4 text-primaryContent pt-6">
          <>{heading2 && <p className="text-xl font-bold">{heading2}</p>}</>
          <div className="tags">
            {/* Mapping over tags array */}
            {tags && tags.map((tag, index) => <p key={index}>{tag}</p>)}
          </div>
        </div>
        <div className="mt-10">
          {btntext1 && (
            <Button
              addclass={btnClass1}
              btntext={btntext1}
              OnClick={() => Router.push(`${btntextLink1}`)}
            />
          )}
        </div>
      </div>
      <div className="img_container_block">
        <div className="img-bg" />

        <div className="img_mockup">
          <Image
            width={500}
            height={500}
            src={image}
            alt={alt || "Project Image"}
          />
        </div>
      </div>
    </div>
  );
};
