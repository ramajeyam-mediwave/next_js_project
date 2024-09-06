"use client";
import React, { useState } from "react";
import Link from "next/link";

type selectValue = {
  id: string;
  title: string;
  link?: string;
  icon: JSX.Element;
  bgColor?: string;
  description?: string;
  bulletPoints?: string[];
};
interface ServiceCardProps {
  userData: selectValue[];
  cardBtn?: boolean;
}

interface DescriptionProps {
  description: string;
  bulletPoints?: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  userData,
  cardBtn,
}) => {
  return (
    <div className="cardOutercontainer">
      {userData.map((item) => {
        return (
          <div
            className={`cardInnercontainer ${item.link ? "min-h-[440px]" : ""}`}
            key={item.id}
          >
            <div className={`cardWapper ${item.link ? "min-h-[440px]" : ""}`}>
              <div
                className={`${
                  item.bgColor ? "cardLogo" : "flex justify-center iconLogo"
                }`}
                style={{
                  backgroundColor: `${item.bgColor ? item.bgColor : ""}`,
                }}
              >
                {item.icon}
              </div>
              <h3 className="cardTitle">{item.title}</h3>
              {item.description && (
                <Description
                  description={item.description}
                  bulletPoints={item.bulletPoints}
                />
              )}
              {cardBtn && item.link && (
                <Link
                  className="btn primary-btn cardButton "
                  href={`/services/${item.link}`}
                >
                  KNOW MORE
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Description: React.FC<DescriptionProps> = ({
  description,
  bulletPoints,
}) => {
  const [readmore, SetReadmore] = useState(true);
  return (
    <>
      {description && description.length < 400 ? (
        <p className="cardDescription">{description}</p>
      ) : (
        <>
          <p className={`${readmore ? "line-clamp-6" : ""} cardDescription`}>
            {description}
          </p>
          {!readmore && (
            <div>
              {bulletPoints &&
                bulletPoints.map((list, index) => {
                  return <p key={index}>- {list}</p>;
                })}
            </div>
          )}
          <div className="flex">
            <button
              onClick={() => SetReadmore((prev) => !prev)}
              className="text-primaryHeading font-bold"
            >
              Read {readmore ? "more" : "less"}
            </button>
          </div>
        </>
      )}
    </>
  );
};
