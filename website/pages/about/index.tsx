import React from "react";
import Router from "next/router";
import { Timesheet } from "../../component/timesheet/Timesheet";
import { Herocard } from "../../component/card/herocard/Herocard";
import Img2 from "../../asset/image/svg/Heroimg2";
import AboutImg from "../../asset/image/jpg&png/About.jpg";
import { InfoCard } from "../../component/card/infocard/InfoCard";
import { ListCard } from "../../component/card/listcard/ListCard";
import {
  AboutListCardData,
  JoinUsData,
  timesheetimages,
} from "../../userdata/UserData";
import BG_SVG from "../../asset/image/svg/BG_SVG";
import { AnimatedSection } from "../../component/animated/AnimatedSection";
import "animate.css/animate.min.css";
import DynamicHead from "../../component/head/DynamicHead";
import { Meetteam } from "../../component/meetteam/Meetteam";
import Link from "next/link";

const About = () => {
  return (
    <>
      <DynamicHead
        pageURL="https://ramajeyam-mediwave.github.io/next_js_project/about"
        image="https://ramajeyam-mediwave.github.io/next_js_project/og-images/about-og.png"
        title="About"
        description="Through platforms and products designed collaboratively with end users, Mediwave drives positive change across various industries by helping end users achieve their goals, whether in healthcare, finance, education, retail, or technology. We tailor solutions that empower users to reach their objectives efficiently and effectively."
      >
        <section className="hero_block main_section bg-white-block">
          <AnimatedSection>
            <Herocard
              addClass="mv-container landing_heading"
              image={<Img2 />}
              heading1="Mediwave Digital - Your Key to Successful Project Outcomes."
              content="Through platforms and products designed collaboratively with end users, Mediwave drives positive change across various industries by helping end users achieve their goals, whether in healthcare, finance, education, retail, or technology. We tailor solutions that empower users to reach their objectives efficiently and effectively."
              UKheader={false}
            />
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <section className="main_section bg-gray-block about_circle_block">
          <AnimatedSection>
            <InfoCard
              addClass="mv-container"
              heading1="About"
              heading2="Mediwave Digital"
              content="Mediwave Digital is a dynamic and forward-thinking technology company, we specialize in delivering customized digital solutions that cater to the unique needs of businesses across various industries. "
              image="https://ramajeyam-mediwave.github.io/next_js_project/assets/celebration/event20224.jpg"
              infoContent="Our expertise spans software development, mobile application development, web application development, SaaS solutions, AR/VR applications, and more for the NHS including Healthlocker, GoodThinking, Medichec, and Health VR. The company has also collaborated with leading academic research centers in London and the UK."
            />
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </section>
        <section className="main_section bg-white-block">
          <ListCard
            addClass="text_heading"
            heading1="Mediwave Digital's"
            heading2=" Vision in Numbers"
            content="Our main goal is to continue providing complete services, including discovery, design, development, DevOps, QA, and deployment, and to attract leaders across various industries such as finance, retail, manufacturing, education, and technology. With our team's collective expertise, we aim to propel Mediwave to the forefront of digital transformation, solidifying its position as an industry leader in the UK."
            userdata={AboutListCardData}
            AlignLeft={true}
          />
        </section>
        <section className="Timesheet_images_container">
          <Timesheet
            addClass="mv-container"
            heading1="Throwback to"
            heading2="our journey"
            content="The brainchild of our founder Mr Kumar Jacob, Mediwave Digital, was born in 2018 with just an idea, five software developers and a small apartment complex in Pondicherry. Here is a brief look back at our journey to date."
            userdata={timesheetimages}
          />
        </section>
        <section className="main_section bg-gray-block">
          <AnimatedSection>
            <Meetteam
              addClass="text-meet"
              heading1="Meet the"
              heading2="team"
              content="Pixels that contribute to the larger picture!"
            />
            <div className="text-center">
              <Link className="btn primary-btn" href={"/ourteam/"}>
                MEET THE TEAM
              </Link>
            </div>
          </AnimatedSection>
        </section>
        <section className="bg-white-block">
          <ListCard
            listPosition="right"
            // readmoreLink={'/careers/Jobdescription'}
            heading1="Join "
            heading2="us"
            content="At Mediwave, we take on big challenges, collaborate with great people, and make a real impact with our work. If you’re ready to grow your career, join us on our mission to help companies deliver happy customer experiences."
            userdata={JoinUsData}
            btntext="EXPLORE OPPORTUNITIES"
            btntextLink1="/careers"
            AlignLeft={true}
          />
        </section>
      </DynamicHead>
    </>
  );
};

export default About;
