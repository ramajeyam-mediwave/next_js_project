import React from "react";
import Router from "next/router";
import DynamicHead from "../component/head/DynamicHead";
import ScrollToSection from "../component/section/ScrollToSection";
import { Herocard } from "../component/card/herocard/Herocard";
import Img1 from "../asset/image/svg/Heroimg1";
import Medicheck from "../asset/image/png/medicheck.png";
import Liverpool from "../asset/image/png/liverpool.png";
import Oxcare from "../asset/image/png/oxcare-land.png";
import Brook from "../asset/image/png/Brook_client.png";
import Southern from "../asset/image/png/Southern_client.png";

import { AnimatedSection } from "../component/animated/AnimatedSection";
import "../styles/Home.module.css";
import {
  BrandLogo,
  JoinUsData,
  multiCardData,
  ServicecardData,
  stackLogo,
  supportData,
  supportIconData,
} from "../userdata/UserData";
import { ListCard } from "../component/card/listcard/ListCard";
import { Button } from "../component/button/Button";
import { MultiCard } from "../component/card/multicard/MultiCard";
import BG_SVG from "../asset/image/svg/BG_SVG";
import "../styles/Home.module.css";
import { Title } from "../component/title/Title";
import { ProjectCard } from "../component/projectcard/projectCard";
import { Gallery } from "../component/gallery/Gallery";
import { TestimonialClient } from "../component/card/testcard/TestimonialClient";
import { Client } from "../component/card/clients/Client";
import { KickStart } from "./components/KickStart";
// import FAQ from "../component/Faq/FAQ";

import { ServiceCard } from "../component/card/serviceCard/ServiceCard";
import ImageSilder from "../component/imageSilder/ImageSilder";
import TechStack from "../component/techStack/TechStack";
import Contact from "./contact";
import ContactForm from "../component/contactForm/ContactForm";
import Banner from "../component/Banner/Banner";

export default function Home() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };
  return (
    <>
      <DynamicHead
        title="Mediwave Digital"
        image="https://ramajeyam-mediwave.github.io/next_js_project/og-images/home-og.png"
        description="With over 50+ people and counting, we are a team of young and passionate individuals working to develop innovative and futuristic digital products and services. At Mediwave we believe that a happy employee is a productive employee and once you are a member of Mediwave, we encourage your ideas, visions, and suggestions."
      >
        {/* HERO SECTION */}
        <section className="hero_block main_section bg-white-block landing_hero_single">
          <AnimatedSection>
            <Herocard
              addClass="mv-container landing_heading"
              image={<Img1 />}
              heading2="Innovative digital transformation strategies for modern businesses"
              content="Unlock Your Digital Edge. We give wings to your venture to soar into profitable realms. Our USP is integration of AI-driven data analytics, agile software and mobile app development, seamless UI/UX design, robust DevOps practices, comprehensive QA testing, dynamic digital marketing, immersive AR/VR experiences, and efficient resource outsourcing for enhanced IT support."
              btntext1="OUR SERVICE "
              btnClass1="primary-btn"
              btntextLink1="#our_services"
              btntext2="GET A QUOTE"
              btnClass2="btn secondary-btn"
              btntextLink2="#get-quote"
            />
            <div className="bg_block">
              <BG_SVG />
            </div>
            <ImageSilder title="Awards & recognitions" sliderData={BrandLogo} />
          </AnimatedSection>
        </section>
        {/* ENDS */}

        {/* OUR SERVICES */}
        <ScrollToSection
          sectionId="our_services"
          className="main_section bg-gray-block service_circle_block"
        >
          <AnimatedSection>
            <MultiCard
              show_line
              addClass="mv-container mt-[35px] text-center"
              heading1="Transform your business with our"
              heading2="digital transformation services"
              content="We are your companions in your digitial transformation! We help you leverage cutting-edge tech such as (AI,VR/AR, data analysis) to develop personalized experiences for your customers, automate repetitive tasks, and consolidate everything from development to support."
              userdata={multiCardData}
              cardSize="col-2"
            >
              <div className="pt-14 mv-container">
                <ServiceCard userData={ServicecardData} cardBtn />
              </div>
            </MultiCard>
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </ScrollToSection>
        {/* ENDS */}
        {/* Collaborators start */}
        {/* Removing testimonial */}
        <ScrollToSection
          sectionId="feature_projects"
          className="main_section bg-white-block testim_block"
        >
          <AnimatedSection>
            <div className="mv-container">
              <Banner
                heading="Let’s build the future of technology together"
                description="Reach out to us today and let's collaborate to turn your ideas into reality. We're here to listen, strategize, and bring your vision to life."
              />
              {/* Removing testimonial */}
              {/* <Title
                addClass="text-center title_para small-letters"
                heading1="Discover what our awesome collaborators have "
                heading2="to say about their experience working with us"
                content="Explore firsthand experiences as we showcase what our valued customers are saying about their journey with us. These testimonials reflect the satisfaction and trust our clients place in our products and services."
                PositionTopBottom={true}
              />
              <div className="grid gap-8 mt-28">
                <TestimonialClient
                  content="I want to emphasise how integral Mediwave have been to achieving this. Throughout the last five months you have been a core part of our team at Brook and we are all extremely grateful to you for everything that you have put into DFD, both individually, and as a whole organisation!"
                  // image={Brook}
                  alt="Image of Matt Rigby"
                  testiName="Matt Rigby"
                  testiDesgination="Head of Digital, Brook"
                  addClass="max-w-[600px] mx-auto"
                />
              </div> */}
            </div>
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </ScrollToSection>
        {/* End */}
        {/* Industries support */}
        <ScrollToSection
          sectionId="our_services"
          className="main_section bg-gray-block service_circle_block"
        >
          <AnimatedSection>
            <Title
              addHeaderStyle="text-primaryHeading"
              addClass="text-center title_para small-letters"
              heading1="Industries"
              heading2="we support"
            />
            <div className="mt-14 mv-container">
              <ServiceCard userData={supportIconData} />
              <div className="text-center mt-14">
                <Button
                  addclass="primary-btn"
                  OnClick={() => Router.push("/contact")}
                  btntext="GET IN TOUCH"
                />
              </div>
            </div>
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </ScrollToSection>
        {/* End */}
        {/* Tech Stack */}
        <ScrollToSection
          sectionId="feature_projects"
          className={
            "main_section  bg-white-block feature_project_block mt-[50px] !pb-0"
          }
        >
          <AnimatedSection>
            <div className="mv-container pb-48">
              <TechStack
                heading1="Technologies We Employ for"
                heading2=" Web Application Development"
                data={stackLogo}
                content="At Mediwave Digital, we harness the power of advanced technologies to deliver superior web application solutions. Our expertise includes front-end technologies like React, Angular, and Vue.js for creating dynamic and responsive user interfaces. We use robust frameworks such as Node.js for back-end development, ensuring secure, scalable, and efficient server-side operations. We manage databases with MySQL, PostgreSQL, and MongoDB, providing reliable data storage and retrieval. Additionally, we leverage cloud services like AWS, Google Cloud, and Azure for scalable and resilient infrastructure. By employing these cutting-edge technologies, we ensure that our web applications are high-performing, secure, and capable of meeting the evolving needs of your business."
              />
            </div>
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </ScrollToSection>
        {/* End */}
        {/* FEATURE PROJECTS */}
        <ScrollToSection
          sectionId="feature_projects"
          className={"main_section bg-gray-block feature_project_block"}
        >
          <AnimatedSection>
            <Title
              heading1="Featured"
              heading2="projects"
              content="Each month, our meticulously crafted product becomes an integral part of millions of lives, serving as a reliable and impactful solution for countless individuals. This widespread usage stands as a testament to the success and resonance of the product we've diligently built."
              contentClass="title_para"
            />
            <ProjectCard
              addClass="grid gap-14 md:gap-24  grid-cols-1 md:grid-cols-2"
              heading1="Medichec"
              content="Medichec helps identify medications that could potentially impact cognitive function or cause other adverse effects in older individuals."
              heading2="Tech stack"
              tags={["Angular Js", "Node Js", "MongoDB", "Cordova"]}
              btntext1="VIEW PROJECT"
              btnClass1="btn primary-btn"
              btntextLink1="/medichec"
              image={Medicheck}
              alt="Medichec"
            />
            <ProjectCard
              addClass="grid gap-14 md:gap-24  grid-cols-1 md:grid-cols-2"
              orderClass="md:order-last"
              heading1="Oxcare"
              content="Oxcare is a digital portal designed for supported self-management of physical health and mental wellbeing in South-East London and parts of Kent. It caters to individuals of all ages who are currently or have previously been under the care of Oxleas."
              heading2="Tech stack"
              tags={["Node Js", "Express Js", "Apostrophe CMS"]}
              btntext1="VIEW PROJECT"
              btnClass1="btn primary-btn"
              btntextLink1="/oxcare"
              image={Oxcare}
              alt="Oxcare"
            />
            <ProjectCard
              addClass="grid gap-14 md:gap-24  grid-cols-1 md:grid-cols-2"
              heading1="The Alder Hey CYP As One"
              content="The Sefton & Liverpool CAMHS services are dedicated to promoting the mental health and well-being of children, young people, families, and carers."
              content2="This platform offers a range of valuable resources aimed at supporting the mental health and wellbeing of children and young people."
              heading2="Tech stack"
              tags={[
                "Node Js",
                "MongoDB",
                "Apostrophe CMS",
                "PostgreSQL",
                "Sequelize",
              ]}
              btntext1="VIEW PROJECT"
              btnClass1="btn primary-btn"
              btntextLink1="/liverpool"
              image={Liverpool}
              alt="Sefton & Liverpool CAMHS"
            />
            <div className="text-center my-10">
              <Button
                addclass="primary-btn"
                btntext="VIEW ALL PROJECTS"
                OnClick={() => Router.push("/projects")}
              />
            </div>
            <div className="bg_block">
              <BG_SVG />
            </div>
          </AnimatedSection>
        </ScrollToSection>
        {/* ENDS */}

        {/* FAQ */}
        <>
          {/* <FAQ /> */}
          <div className=" mt-20 mb-48" id="get-quote">
            <div className="main_section bg-gray-block mv-container  rounded-sm drop-shadow-md !p-14 grid md:grid-cols-2 gap-5">
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
        </>
        {/* ENDS */}
      </DynamicHead>
    </>
  );
}
