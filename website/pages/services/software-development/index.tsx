import React from "react";
import { AnimatedSection } from "../../../component/animated/AnimatedSection";
import { Herocard } from "../../../component/card/herocard/Herocard";
import BG_SVG from "../../../asset/image/svg/BG_SVG";
import ImageSilder from "../../../component/imageSilder/ImageSilder";
import Img2 from "../../../asset/image/svg/Heroimg2";
import { ClientLogo, stackLogo } from "../../../userdata/UserData";
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
} from "../../../userdata/SoftwareDevelopment";
import TechStack from "../../../component/techStack/TechStack";
import FAQBlock from "../../../component/Faq/FAQBlock";
import ContactForm from "../../../component/contactForm/ContactForm";
import DevProcessCard from "../../../component/card/serviceCard/devProcessCard";
import DevProcess from "../../../component/DevProcess/DevProcess";
import { items, colors } from "../../../userdata/ProcessData";
import { MultiCard } from "../../../component/card/multicard/MultiCard";

const Software = () => {
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
            heading2="Transforming Ideas into Innovative Software Solutions"
            content="At Mediwave Digital, we specialize in turning your visions into reality with our comprehensive software development services. Our expert team is dedicated to delivering cutting-edge, customized solutions that drive business growth and efficiency. From initial concept and design to deployment and maintenance, we ensure every step of the development process is seamless and tailored to your unique needs. Partner with us to leverage the latest technologies and methodologies, and experience the power of innovative software solutions that transform your business."
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
              heading="Empower Your Business with Custom Web Applications"
              description="Mediwave Digital specializes in creating dynamic, user-friendly web applications tailored to your business needs. Our solutions enhance operational efficiency, improve user experience, and drive growth—partner with us to transform your digital presence and achieve your business goals."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Industries that we cover for your"
            heading2="end-to-end software development solutions"
            content="Mediwave Technology covers a wide spectrum of industries. They range from Healthcare, SaaS, and FMCG to Banking & Retail, Games & Experiences, Real Estate, Education, Information Technology, and many more. Our technical experts cover all of them in a sophisticated way and ethically too."
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
            heading1="Empower Your Business with Our Comprehensive"
            heading2=" Suite of Custom Software Development Services"
            content="It’s very essential to stay ahead of the curve in the fast-paced and dynamic business ecosystem. Innovative solutions are the bedrock of an organization to propel it onto a successful and profitable path. Our Comprehensive Suite of Custom Software Development Services is precisely designed towards that end."
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
              heading="Revolutionize Your Business with Custom SaaS Applications"
              description="Mediwave Digital provides tailored SaaS application development to streamline your operations, boost efficiency, and drive growth. Our solutions ensure seamless integration, scalability, and exceptional user experience—partner with us to transform your business."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Benefits of Hiring Mediwave Digital for Your"
            heading2=" Software Development"
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
            heading1="Our Comprehensive Custom"
            heading2=" Software Development Process"
            content="It’s very essential to stay ahead of the curve in the fast-paced and dynamic business ecosystem. Innovative solutions are the bedrock of an organization to propel it onto a successful and profitable path. Our Comprehensive Suite of Custom Software Development Services is precisely designed towards that end."
          />

          <div className="mv-container grid gap-28 pt-10">
            <DevProcess processData={DevProcessDataArray} />
            <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 w-full">
              {DevProcessDataArray.map((data) => (
                <DevProcessCard key={data.id} data={data} />
              ))}
            </div>
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
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Reliable Post-Project Support"
            heading2=" from Mediwave Digital"
          />
          <div className="mv-container">
            <ServiceCard userData={packageData} />
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
          <TechStack
            heading1="Cutting-Edge Tech Stack We Use for"
            heading2=" Software Development"
            data={stackLogo}
            content="By utilizing these advanced technologies, we ensure that our software solutions are innovative, secure, and tailored to meet your specific business needs. Our team of experienced developers is committed to staying at the forefront of technology trends, enabling us to deliver solutions that drive growth and efficiency for your business."
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

export default Software;
