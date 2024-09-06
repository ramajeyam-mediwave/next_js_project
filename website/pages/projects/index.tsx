import React from "react";
import DynamicHead from "../../component/head/DynamicHead";
import { AnimatedSection } from "../../component/animated/AnimatedSection";
import { Herocard } from "../../component/card/herocard/Herocard";

import Img1 from "../../asset/image/svg/ProjectSVG";
import BG_SVG from "../../asset/image/svg/BG_SVG";
import { ProjectCard } from "../../component/card/projectinfo/ProjectCard";
import { ProjectCardData } from "../../userdata/ProjectData";
import { SimpleCard } from "../../component/card/simplecard/SimpleCard";
import { KickStart } from "../components/KickStart";

const Projects = () => {
  return (
    <DynamicHead
      title="Projects"
      image="https://www.mediwavedigital.com/og-images/career-og.png"
      description={`At our core, we're committed to transforming ideas into tangible results. Through a blend of creativity, expertise, and dedication, we turn visions into reality, fostering success and growth for our clients.`}
    >
      <section className="hero_block main_section bg-white-block">
        <AnimatedSection>
          <Herocard
            addClass="mv-container landing_heading"
            image={<Img1 />}
            heading2="Growing the numbers "
            heading3="as we grow together."
            content="In our projects section, we unfold the narrative from concept to completion, providing a visual journey that highlights our meticulous planning and flawless execution."
            UKheader={false}
          />
          <div className="bg_block">
            <BG_SVG />
          </div>
        </AnimatedSection>
      </section>
      <section
        id="woe_justnow"
        className="main_section bg-gray-block career_img_background"
      >
        <AnimatedSection>
          <ProjectCard
            addClass="mv-container all-project-list"
            heading2="WOW, JUST WOW"
            content={`At our core, we're committed to transforming ideas into tangible results. Through a blend of creativity, expertise, and dedication, we turn visions into reality, fostering success and growth for our clients.`}
            userdata={ProjectCardData}
            cardSize="col-2"
          />
          <div className="bg_block">
            <BG_SVG />
          </div>
        </AnimatedSection>
      </section>
      <section className="hero_block main_section bg-white-block">
        <KickStart />
      </section>
    </DynamicHead>
  );
};
export default Projects;
