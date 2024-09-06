"use client";
import React, { useState } from "react";

interface MultiCardProps {
  heading1?: string;
  heading2?: string;
  content?: string;
  userdata?: {
    image?: JSX.Element;
    heading?: string;
    content?: string;
    bgColor?: string;
    icon?: JSX.Element;
  }[];
  addClass?: string;
  cardSize?: "col-1" | "col-2" | "col-3" | "col-4";
  show_line?: boolean;
  children?: any;
  multiCard?: boolean;
}

export const MultiCard: React.FC<MultiCardProps> = ({
  heading1,
  heading2,
  content,
  userdata,
  addClass,
  cardSize = "col-2",
  show_line,
  children,
  multiCard,
}) => {
  const [readmore, SetReadmore] = useState(true);
  return (
    <section className={`multicard_main ${addClass ? addClass : ""}`}>
      <div className="multi_head">
        <span className="multi_heading title_section animate-heading">
          {heading1 && <h2 className="text-primaryHeading">{heading1}</h2>}
          {heading2 && <h2>{heading2}</h2>}
        </span>
        {content && <p className="animate-subtitle">{content}</p>}
        {children && <div>{children}</div>}
      </div>
      {multiCard && (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${cardSize}`}>
          {userdata &&
            userdata.map((item, idx) => (
              <div
                className={`card_block gap-6 ${show_line ? "show_line" : ""}`}
                key={idx.toString()}
              >
                {item.image && (
                  <span className="Icon_block" role="image">
                    {item.image}
                  </span>
                )}
                {item.icon && (
                  <div
                    className={`${
                      item.bgColor
                        ? "cardLogo !mb-0"
                        : "flex justify-center iconLogo"
                    }`}
                    style={{
                      backgroundColor: `${item.bgColor ? item.bgColor : ""}`,
                    }}
                  >
                    {item.icon}
                  </div>
                )}
                <div className="grid gap-2">
                  <h2>{item.heading}</h2>
                  {item.content && (
                    <>
                      {item.content?.length < 300 ? (
                        <p>{item.content}</p>
                      ) : (
                        <>
                          <p
                            className={`${
                              readmore ? "line-clamp-4 !mb-0" : ""
                            }`}
                          >
                            {item.content}
                          </p>
                          <div className="flex justify-center">
                            <button
                              onClick={() => SetReadmore((prev) => !prev)}
                              className="mt-2 mb-6 text-primaryHeading font-bold"
                            >
                              Read {readmore ? "more" : "less"}
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};
