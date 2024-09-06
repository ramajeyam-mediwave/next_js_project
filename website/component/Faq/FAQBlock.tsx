import React, { useState } from "react";
import { Button } from "../button/Button";
import { Title } from "../title/Title";
import { AnimatedSection } from "../animated/AnimatedSection";
import { AccordionArrow } from "../../asset/image/svg/AccordionArrow";

type Data = {
  title: string;
  description: string;
  bulletPoints?: string[];
};

interface FAQProps {
  list: Data[];
}

const FAQBlock = ({ list }: FAQProps) => {
  const [activeAccordion, setActiveAccordion] = useState<any>(null);

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div className="main_section mv-container kick_start_block">
      <AnimatedSection>
        <Title
          addHeaderStyle="text-primaryHeading"
          addClass="text-center title_para small-letters"
          heading1="Frequently asked"
          heading2="questions"
          content=""
        />
      </AnimatedSection>
      <div>
        <>
          {list.map((item, index) => {
            return (
              <div
                className="p-4 max-w-md mx-auto shadow-md rounded-sm mb-4 border border-solid border-cardline-400/10"
                key={index}
              >
                <Button
                  btntext={`${item.title || ""}`}
                  addclass="!gap-4 !pb-[10px] hover:!bg-transparent !text-primaryContent w-full text-left !justify-between !text-2xl"
                  OnClick={() => toggleAccordion(index)}
                >
                  {activeAccordion === index ? (
                    <div className="rotate-180">
                      <AccordionArrow
                        fill="!fill-primaryContent"
                        stroke="!stroke-primaryContent"
                        addClass="min-w-[30px]"
                      />
                    </div>
                  ) : (
                    <AccordionArrow
                      fill="!fill-primaryContent"
                      stroke="!stroke-primaryContent"
                      addClass="min-w-[30px]"
                    />
                  )}
                </Button>
                {activeAccordion === index && (
                  <div className="px-4 pt-4 pb-8">
                    <div
                      className="grid grid-cols-1"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                    {item.bulletPoints && (
                      <div>
                        <ul className="mt-2">
                          {item.bulletPoints?.map((point, index) => {
                            return (
                              <li key={index}>
                                <p>{point}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default FAQBlock;
