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
import { MultiCard } from "../../../component/card/multicard/MultiCard";
import TechStack from "../../../component/techStack/TechStack";
import FAQBlock from "../../../component/Faq/FAQBlock";
import ContactForm from "../../../component/contactForm/ContactForm";
import DevProcessCard from "../../../component/card/serviceCard/devProcessCard";
import DevProcess from "../../../component/DevProcess/DevProcess";
import { items, colors } from "../../../userdata/ProcessData";
import {
  supportData,
  softwareData,
  DevProcessDataArray,
  packageData,
  accordianData,
} from "../../../userdata/ServiceWebApp";

const WebDevelopment = () => {
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
            heading2="Cutting-edge web Application Development Services for Your Business Success"
            content="At Mediwave Digital, we specialize in creating robust, scalable, and high-performing web applications tailored to your unique business needs. Our expert team leverages the latest technologies and industry best practices to deliver solutions that drive growth and enhance user engagement. Whether you need a custom web app or a complex enterprise solution, we ensure seamless integration and exceptional user experiences. Partner with us to transform your vision into a powerful web application that stands out in today's competitive digital landscape."
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
              heading="Transforming Healthcare with Innovative Digital Solutions"
              description="At Mediwave Digital, we are dedicated to revolutionizing the healthcare industry through cutting-edge digital technologies. Our comprehensive solutions enhance patient care, streamline operations, and improve overall efficiency. Partner with us to bring innovation and excellence to your healthcare practice."
            />
          </div>
          <Title
            addHeaderStyle="text-primaryHeading"
            addClass="text-center title_para small-letters"
            heading1="Diverse Industries We Cater to with"
            heading2="Our Web Application Development Expertise"
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
            heading1="Transform Your Business with Our Tailored"
            heading2=" Web Application Development Services"
            content="In today's digital era, having a robust and scalable web application is crucial for business success. At Mediwave Digital, we specialize in creating customized web applications that align perfectly with your unique business needs and goals. Our tailored solutions are designed to streamline your operations, enhance customer engagement, and drive growth."
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
              heading="Empower Your Business with Next-Gen Mobile App Development"
              description="At Mediwave Digital, we specialize in creating innovative and user-centric mobile applications that drive engagement and growth. Our team of experienced developers utilizes the latest technologies to build robust and scalable mobile solutions tailored to your business needs. Whether you need an iOS, Android, or cross-platform app, we ensure seamless performance and exceptional user experiences. Partner with us to transform your ideas into powerful mobile applications that stand out in today's competitive market."
            />
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
            heading1="Our Detailed and Custom Web"
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
            heading1="The solution we provide for your web"
            heading2=" application development needs"
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
            heading2=" Web Application Development"
            data={stackLogo}
            content="At Mediwave Digital, we harness the power of advanced technologies to deliver superior web application solutions. Our expertise includes front-end technologies like React, Angular, and Vue.js for creating dynamic and responsive user interfaces. We use robust frameworks such as Node.js for back-end development, ensuring secure, scalable, and efficient server-side operations. We manage databases with MySQL, PostgreSQL, and MongoDB, providing reliable data storage and retrieval. Additionally, we leverage cloud services like AWS, Google Cloud, and Azure for scalable and resilient infrastructure. By employing these cutting-edge technologies, we ensure that our web applications are high-performing, secure, and capable of meeting the evolving needs of your business."
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

export default WebDevelopment;
