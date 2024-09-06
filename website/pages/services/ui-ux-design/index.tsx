import React from "react";
import { AnimatedSection } from "../../../component/animated/AnimatedSection";
import { Herocard } from "../../../component/card/herocard/Herocard";
import BG_SVG from "../../../asset/image/svg/BG_SVG";
import ImageSilder from "../../../component/imageSilder/ImageSilder";
import Img2 from "../../../asset/image/svg/Heroimg2";
import { ClientLogo, stackLogo, UI_UX_Tech } from "../../../userdata/UserData";
import ScrollToSection from "../../../component/section/ScrollToSection";
import { Title } from "../../../component/title/Title";
import { ServiceCard } from "../../../component/card/serviceCard/ServiceCard";
import { Button } from "../../../component/button/Button";
import { useRouter } from "next/router";
import Banner from "../../../component/Banner/Banner";
import {
  supportData,
  softwareData,
  EmployeeBenefits,
  DevProcessDataArray,
  packageData,
  accordianData,
} from "../../../userdata/UiUxDesignServices";
import TechStack from "../../../component/techStack/TechStack";
import FAQBlock from "../../../component/Faq/FAQBlock";
import ContactForm from "../../../component/contactForm/ContactForm";
import DevProcessCard from "../../../component/card/serviceCard/devProcessCard";
import DevProcess from "../../../component/DevProcess/DevProcess";
import { items, colors } from "../../../userdata/ProcessData";
import { MultiCard } from "../../../component/card/multicard/MultiCard";

const DesignServicesindex = () => {
  const router = useRouter();
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };
  return (
    <>
      <section className="hero_block main_section bg-white-block landing_hero_single">
        <AnimatedSection>
          <Herocard
            addClass="mv-container landing_heading"
            image={<Img2 />}
            heading2="UI/UX Design Service from Mediwave Digital"
            content="At Mediwave Digital, we offer comprehensive UI/UX design solutions that blend creativity with functionality. Our design experts focus on delivering visually appealing and user-friendly interfaces that elevate your digital presence, ensuring a seamless experience across all platforms."
            btntext1="GET A QUOTE"
            btnClass1="primary-btn"
            btntextLink1="#get-quote"
          />
          <div className="bg_block">
            <BG_SVG />
          </div>
          <ImageSilder title="Recent projects" sliderData={ClientLogo} />
        </AnimatedSection>
      </section>
      <ScrollToSection
        sectionId="our_services"
        className="main_section bg-gray-block service_circle_block"
      >
        <AnimatedSection>
          <div className="mv-container">
            <Banner
              heading="Enhance Your Project with our Expert Dedicated Resources"
              description="Boost your project’s success with Mediwave Digital’s dedicated resources. Our skilled professionals integrate seamlessly into your team, ensuring enhanced productivity, expert support, and timely delivery. Let us help you achieve your goals efficiently and effectively."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Industries We Cover for"
            heading2="  UI/UX Design Services"
          />
          <div className="mt-14 mv-container">
            <ServiceCard userData={supportData} />
            <div className="text-center mt-14">
              <Button
                addclass="primary-btn"
                OnClick={() => router.push("/contact")}
                btntext="GET IN TOUCH"
              />
            </div>
          </div>
          <div className="bg_block">
            <BG_SVG />
          </div>
        </AnimatedSection>
      </ScrollToSection>
      <ScrollToSection
        sectionId="feature_projects"
        className={
          "main_section bg-white-block feature_project_block mt-[50px]"
        }
      >
        <AnimatedSection>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Creative and Impactful"
            heading2="  User Experience Design Services"
          />
          <div className="mt-16 mv-container">
            <ServiceCard userData={softwareData} cardBtn />
          </div>
          <div className="bg_block">
            <BG_SVG />
          </div>
        </AnimatedSection>
      </ScrollToSection>
      <ScrollToSection
        sectionId="our_services"
        className="main_section bg-gray-block service_circle_block"
      >
        <AnimatedSection>
          <div className="mv-container">
            <Banner
              heading="Unlock Your Business Potential with SaaS App Development"
              description="Leverage the power of SaaS with Mediwave Digital’s tailored app development services. We craft scalable, secure, and feature-rich SaaS solutions that drive efficiency and foster innovation, helping your business thrive in a competitive market."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Collaborating with Visionary"
            heading2=" Businesses and Diverse Clients"
          />
          <MultiCard userdata={EmployeeBenefits} multiCard show_line />
          <div className="bg_block">
            <BG_SVG />
          </div>
        </AnimatedSection>
      </ScrollToSection>
      <ScrollToSection
        sectionId="feature_projects"
        className={
          "main_section bg-white-block feature_project_block mt-[50px]"
        }
      >
        <AnimatedSection>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="UI/UX Design Service"
            heading2=" Process for Our Clients"
          />

          <div className="mv-container grid gap-28 pt-10">
            <DevProcess processData={DevProcessDataArray} />
            <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 w-full">
              {DevProcessDataArray.map((data) => (
                <DevProcessCard key={data.id} data={data} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </ScrollToSection>
      <ScrollToSection
        sectionId="feature_projects"
        className={
          "main_section bg-white-block feature_project_block mt-[50px]"
        }
      >
        <AnimatedSection>
          <TechStack
            heading1="Tech Stack, We Use for"
            heading2=" UI/UX Design Services"
            data={UI_UX_Tech}
            content="At Mediwave Digital, we leverage a robust and versatile tech stack to deliver exceptional UI/UX design services. Our tools and technologies ensure that every project is crafted with precision, creativity, and efficiency."
          />
          <FAQBlock list={accordianData} />
          <div className=" mb-48" id="get-quote">
            <div className="main_section bg-gray-block mv-container rounded-sm drop-shadow-md !p-14 grid md:grid-cols-2 gap-5">
              <AnimatedSection>
                <Title
                  PositionTopBottom
                  addHeaderStyle="text-primaryHeading"
                  addClass="text-left title_para small-letters"
                  heading1="Let’s Discuss"
                  heading2="Your Needs"
                  content="Reach out to us today and let's collaborate to turn your ideas into reality. We're here to listen, strategize, and bring your vision to life."
                />
              </AnimatedSection>
              <ContactForm service onSubmit={handleSubmit} />
            </div>
          </div>
          <div className="bg_block">
            <BG_SVG />
          </div>
        </AnimatedSection>
      </ScrollToSection>
    </>
  );
};

export default DesignServicesindex;
