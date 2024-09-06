import React from "react";
import { AnimatedSection } from "../../../component/animated/AnimatedSection";
import { Herocard } from "../../../component/card/herocard/Herocard";
import BG_SVG from "../../../asset/image/svg/BG_SVG";
import ImageSilder from "../../../component/imageSilder/ImageSilder";
import Img2 from "../../../asset/image/svg/Heroimg2";
import { ClientLogo, Saas_Tech, stackLogo } from "../../../userdata/UserData";
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
} from "../../../userdata/SaasProductDevelopment";
import TechStack from "../../../component/techStack/TechStack";
import FAQBlock from "../../../component/Faq/FAQBlock";
import ContactForm from "../../../component/contactForm/ContactForm";
import DevProcessCard from "../../../component/card/serviceCard/devProcessCard";
import DevProcess from "../../../component/DevProcess/DevProcess";
import { items, colors } from "../../../userdata/ProcessData";
import { MultiCard } from "../../../component/card/multicard/MultiCard";

const SaaSProductDevelopment = () => {
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
            heading2="Comprehensive SaaS App Development Services by Mediwave Digital"
            content="Software-as-a-service (SaaS) applications have introduced a new paradigm in business operations and interaction with customers. Mediwave Digital’s skilled team offers cutting-edge SaaS app development solutions, encompassing key stages such as requirement analysis, design, development, testing, and deployment. We make sure our cost-effective product serves multiple users smartly and safely. Our product is known for flexibility, adaptability, and operational efficiency. "
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
              heading="Elevate Your Business with Custom Web Applications"
              description="Mediwave Digital offers tailored web application development to enhance your business operations and user experience. Our innovative solutions are designed to drive growth and streamline your online presence."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Empowering Diverse Industries with"
            heading2=" Tailored Digital Solutions"
            content="At Mediwave Digital, we empower a wide range of industries with customized digital solutions that drive growth and innovation. From healthcare and finance to retail, education, and beyond, our expertise spans across various sectors. We develop tailored mobile apps, web applications, and software solutions that meet the unique challenges of each industry. Our goal is to enhance efficiency, improve customer engagement, and support the evolving needs of businesses, helping them stay competitive in a rapidly changing digital landscape."
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
            heading1="Transform Your Business With Our"
            heading2="  Saas App Development Services"
            content="Partner with Mediwave Digital to transform your business with innovative, industry-specific SaaS solutions. Our expert team helps you unlock your potential with dynamic applications specifically designed to suit your requirements and future growth. Be it secure data management, extensive analytics or enhanced customer experiences, we leave nothing to chance. All this we offer within an affordable budget. Join the many businesses that have already benefited from our cutting-edge solutions."
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
            heading1="Solutions We Provide for SaaS"
            heading2=" App Development Services"
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
            heading1="Our Detailed SaaS"
            heading2=" App Development Process"
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
            heading1="Cutting-Edge Tech Stack We Use for"
            heading2=" Software Development"
            data={Saas_Tech}
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

export default SaaSProductDevelopment;
