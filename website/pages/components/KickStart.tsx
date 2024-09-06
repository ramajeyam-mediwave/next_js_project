import React from "react";
import { Button } from "../../component/button/Button";
import Router from "next/router";
import Link from "next/link";
import { Title } from "../../component/title/Title";
import ScrollToSection from "../../component/section/ScrollToSection";
import { AnimatedSection } from "../../component/animated/AnimatedSection";

interface KickStartProps {}
export const KickStart: React.FC<KickStartProps> = ({}) => {
  return (
    <>
      <ScrollToSection
        sectionId="our_culture"
        className={"main_section mv-container bg-white-block kick_start_block"}
      >
        <AnimatedSection>
          <Title
            addClass="text-center title_para small-letters"
            heading1="Ready to"
            heading2="kickstart your next project?"
            content="Reach out to us today and let's collaborate to turn your ideas into reality. We're here to listen, strategize, and bring your vision to life."
          />
          <div className="text-center">
            <Button
              addclass="primary-btn"
              btntext="SAY HELLO!!!"
              OnClick={() => Router.push("/contact")}
            />
          </div>
        </AnimatedSection>
      </ScrollToSection>
    </>
  );
};

export default KickStart;
