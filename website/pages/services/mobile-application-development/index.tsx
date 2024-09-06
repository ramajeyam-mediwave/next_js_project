import React from "react";
import { AnimatedSection } from "../../../component/animated/AnimatedSection";
import { Herocard } from "../../../component/card/herocard/Herocard";
import BG_SVG from "../../../asset/image/svg/BG_SVG";
import ImageSilder from "../../../component/imageSilder/ImageSilder";
import Img2 from "../../../asset/image/svg/Heroimg2";
import { ClientLogo, Mobile_Tech } from "../../../userdata/UserData";
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
} from "../../../userdata/MobileAppDevelopment";
import TechStack from "../../../component/techStack/TechStack";
import FAQBlock from "../../../component/Faq/FAQBlock";
import ContactForm from "../../../component/contactForm/ContactForm";
import DevProcessCard from "../../../component/card/serviceCard/devProcessCard";
import DevProcess from "../../../component/DevProcess/DevProcess";
import { items, colors } from "../../../userdata/ProcessData";
import { MultiCard } from "../../../component/card/multicard/MultiCard";

const MobileDevelopment = () => {
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
            heading2="Transform Your Business with Custom Mobile Applications"
            content="Mediwave Digital creates bespoke mobile applications designed to enhance user engagement, improve efficiency, and drive business growth. Our tailored solutions deliver seamless functionality and exceptional user experience."
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
              heading="Innovative Saas App Development Solutions for Your Business"
              description="Mediwave Digital specializes in developing innovative SaaS applications tailored to your unique business needs. Enhance operational efficiency, ensure seamless integration, and achieve your business goals with our expert solutions."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Diverse Industries We Cater to with Our"
            heading2=" Mobile Application Development Expertise"
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
            heading1="Transform Your Business with Our Custom"
            heading2=" Mobile Application Development Services"
            content="The ability to attract and retain customers is the crux of a business. Mediwave Digital's mobile applications are engineered to deliver seamless user experiences. Our innovative solutions enable you to analyze customer feedback in real-time to not only meet but also exceed expectations. A high level of satisfaction propels your business on the path to profitability. A streamlined communication process fosters loyalty."
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
              heading="Elevate Your Business with Tailored AR/VR Apps"
              description="Mediwave Digital offers customized AR/VR application development to enhance user engagement and operational efficiency. Experience the power of innovative, immersive solutions designed to transform your business and captivate your audience."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Reasons to Choose Us for Your Mobile"
            heading2=" Application Development Projects"
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
            heading1="Our Detailed and Custom Mobile"
            heading2=" Application Development Process"
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
            heading1="Solutions We Provide for Your Mobile"
            heading2=" Application Development Needs"
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
            heading1="Technologies We Employ for"
            heading2=" Mobile Application Development"
            data={Mobile_Tech}
            content="At Mediwave Digital, we utilize cutting-edge technologies to deliver robust and high-performing mobile applications. For iOS development, we leverage Swift and Objective-C, ensuring seamless and efficient app performance. Our Android apps are built using Kotlin and Java, providing powerful and reliable solutions. For cross-platform development, we employ Flutter and React Native, allowing us to create versatile apps that run smoothly on both iOS and Android. Our backend development is powered by Node.js & Django, ensuring scalable and secure server-side functionality. We manage databases using MySQL, PostgreSQL, and MongoDB for optimal data storage and retrieval. Cloud services like AWS, Google Cloud, and Azure enable us to provide scalable and resilient infrastructure. Additionally, we utilize DevOps tools such as Docker, Kubernetes, and Jenkins for continuous integration and deployment, and implement advanced security measures like OAuth, SSL/TLS, and encryption technologies to protect your application and user data."
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

export default MobileDevelopment;
