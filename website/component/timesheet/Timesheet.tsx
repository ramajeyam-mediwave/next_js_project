import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import timeicon from "../../asset/image/svg/timeicon";
interface TimesheetProps {
  addClass?: string;
  heading1?: string;
  heading2?: string;
  content?: string;
  userdata?: any;
}
export const Timesheet: React.FC<TimesheetProps> = ({
  addClass,
  heading1,
  heading2,
  content,
  userdata,
}) => {
  return (
    <>
      <div className={`${addClass ? addClass : ""}`}>
        <section className={`main_timesheet`}>
          <div className="multi_head">
            <span className="multi_heading title_section">
              {heading1 && <h2 className=" text-primaryHeading">{heading1}</h2>}
              {heading2 && <h2>{heading2}</h2>}
            </span>
            <p className="story_content">{content}</p>
          </div>
        </section>
        <section className="main_design_section">
          <div className="maintimesheet_design">
            {userdata &&
              userdata.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <div className="maindesign_contain">
                    <AnimationOnScroll
                      duration={item.duration}
                      animateIn="animate__zoomIn"
                      animateOnce={true}
                    >
                      <div className="timesheet_design">
                        <p className={`time_content_design`}>{item.content}</p>
                      </div>
                    </AnimationOnScroll>
                    <div className="icon_design"></div>
                    <div className="image_design">
                      <AnimationOnScroll
                        duration={item.duration}
                        animateIn="animate__zoomIn"
                        animateOnce={true}
                      >
                        <div className="">
                          <div className="image_outer">{item.image}</div>
                          <div className="year_design">
                            <span className="year_design_contain">
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};
