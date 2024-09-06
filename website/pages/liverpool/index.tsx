import Image from "next/image";
import DynamicHead from "../../component/head/DynamicHead";
import MockupGroup from "../../asset/image/asone-mockup-group.png";
import Mobile1 from "../../asset/image/asone-mockup1.png";
import Mobile2 from "../../asset/image/asone-mockup2.png";
import Mobile3 from "../../asset/image/asone-mockup3.png";
import CoverCurvePattern from "../../asset/image/cover-bg-pattern.png";
import BG_SVG from "../../asset/image/svg/BG_SVG";
import DetailsCoverPattern from "../../asset/image/svg/DetailsCoverPattern";
import { ProjectCard } from "../../component/card/projectinfo/ProjectCard";
import { ProjectCardData } from "../../userdata/ProjectData";

const StatsDetails = [
  {
    id: 1,
    name: "Project name",
    content: "The Alder Hey CYP As One™ Platform",
  },
  {
    id: 2,
    name: "Trust name",
    content: `Alder Hey Children's NHS Foundation Trust`,
  },
  {
    id: 3,
    name: "Industry",
    content: "Health Care",
  },
  {
    id: 4,
    name: "Location",
    content: "Liverpool, England",
  },
  {
    id: 5,
    name: "Scope",
    content: "Digital Portal",
  },
  {
    id: 6,
    name: "Tech stack",
    content: "Apostrophe CMS, Mongodb, NodeJs, PostgreSQL and Sequelize",
  },
];

const StepsWeTook = [
  {
    id: 1,
    stepCount: "01",
    title: "Setting up a solid foundation",
    content:
      "Establishing a robust groundwork to ensure stability, scalability, and success in every aspect of the project.",
    tags: ["Discovery", "Content architecture", "Wireframing"],
  },
  {
    id: 2,
    stepCount: "02",
    title: "Bringing it into visual reality",
    content:
      "Transforming abstract concepts into vibrant visual experiences that captivate and engage users.",
    tags: ["Mood boarding", "UI crafting", "Interaction design"],
  },
  {
    id: 3,
    stepCount: "03",
    title: "Develop, launch, conquer",
    content:
      "Execute, unveil, dominate: a triumphant journey from development to launch.",
    tags: ["Software creation", "Agile deployment", "Quality assurance"],
  },
];

const LiverpoolDetailsPage = () => {
  return (
    <>
      <DynamicHead
        pageURL="https://www.mediwavedigital.com/liverpool"
        image="https://www.mediwavedigital.com/og-images/liverpool-og.png"
        title="About the project - liverpool"
        description="Starting in January 2020, Mediwave and Oxleas have joined forces to streamline 27 business objectives under four key domains: Care, Community, Trackers, and Tools. The Oxcare platform, accessible through NHS login credentials, enables patients to manage their health records, care plans, appointments, and personalised educational materials."
      >
        <section className="project-details-cover liverpool">
          <div className="cover-curve">
            <DetailsCoverPattern />
          </div>
        </section>
        <section className="content-section ">
          <div className="content-container">
            <div className="stats-card">
              <div className="details-wrap">
                {StatsDetails.map((item: any, index: number) => {
                  return (
                    <div key={index} className="list-item-wrap">
                      <div className="list-item">
                        <h3>{item.name}</h3>
                        <p>{item.content}</p>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="content-section short develop_circle_background">
          <div className="content-container short">
            <h2 className="section-heading">Project Overview</h2>
            <p>
              A bi-directional API is needed to facilitate seamless information
              exchange between the CYP As One platform and HC Comms, for sharing
              appointment booking details related to YPAS (Youth Psychological
              and Support Services).
            </p>
            <p>
              Service administrators should be able to access the admin portal
              to manually add appointment details for a referral.
            </p>
            <p>
              Both children/young people and their parents should have access to
              view appointment details along with the referral status.
            </p>
            <p>
              If a user changes their appointment, the updated information
              should be communicated either automatically via HC Comms or
              manually updated by a service administrator through the admin
              portal, depending on the service.
            </p>
          </div>
        </section>
        <section className="content-section short">
          <div className="content-container short">
            <h2 className="section-heading">Problem statement</h2>
            <p>
              The challenge lies in optimising communication and data exchange
              for appointment bookings between the CYP As One platform and HC
              Comms for YPAS. Currently, integration gaps lead to potential
              discrepancies and inefficiencies in managing appointment data.
              Moreover, there&apos;s a demand to improve user experience by
              granting access to appointment details for both children/young
              people and their parents. Furthermore, there&apos;s a necessity to
              clarify and standardise the procedure for updating appointment
              changes to ensure timely and accurate updates throughout the
              system.
            </p>
          </div>
        </section>
        <section className="main_section content-section circle_background">
          <div className="content-container shorter">
            <h2 className="section-heading">Steps we took</h2>
            <div className="steps-we-took-wrap">
              {StepsWeTook.map((item: any, index: number) => {
                return (
                  <div className="steps-we-took-list" key={index}>
                    <div>
                      <p className="number">
                        <span>{item.stepCount}</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="title">{item.title}</h3>
                      <p className="desc">{item.content}</p>
                      <div className="tags-wrap">
                        {item.tags.map((item: any, index: number) => {
                          return (
                            <>
                              <span>{item}</span>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-10"></div>
          </div>
          <div className="bg_block">
            <BG_SVG />
          </div>
        </section>
        <section className="about_circle_block main_section bg-gray-block ">
          <div className="content-container">
            <h2 className="section-heading">A glimpse of this app</h2>
            <div className="spacer-25"></div>
            {/* Desktop mockup group */}
            <Image
              src={MockupGroup}
              alt="Grouped product shot of Oxcare"
              width={1006}
              height={624}
            />{" "}
            <div className="spacer-50"></div>
            <div className="spacer-50 max-md:hidden"></div>
            {/* Mobile mockups */}
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <div className="pt-12 max-md:p-0 text-center">
                <Image
                  src={Mobile1}
                  alt="Mobile product shot"
                  width={310}
                  height={610}
                  className="inline-block"
                />
              </div>
              <div className="pb-12 max-md:p-0 text-center">
                <Image
                  src={Mobile2}
                  alt="Mobile product shot"
                  width={310}
                  height={610}
                  className="inline-block"
                />
              </div>
              <div className="pt-12 max-md:p-0 text-center">
                <Image
                  src={Mobile3}
                  alt="Mobile product shot"
                  width={310}
                  height={610}
                  className="inline-block"
                />
              </div>
            </div>
          </div>
          <div className="bg_block">
            <BG_SVG />
          </div>
        </section>
        <section className="content-section">
          <div className="content-container short">
            <h2 className="section-heading">Solution</h2>
            <p>
              The Alder Hey CYP As One™ platform seamlessly integrates 13 mental
              health providers, improving access to CAMHS referrals and support.
              Utilising a bi-directional API, it fosters smooth communication
              between CYP As One and HC Comms for YPAS appointment bookings.
              Administrators can add manually appointment details, while users
              can easily access appointment information and status.
            </p>
          </div>
        </section>
        <section className="content-section short">
          <div className="content-container">
            <hr className="border-b-2 border-popup" />
          </div>
        </section>
        <section className="content-section">
          <div className="content-container">
            <h2 className="section-heading">More projects</h2>
          </div>
          <ProjectCard
            addClass="mv-container more-project"
            userdata={[ProjectCardData[0], ProjectCardData[3]]}
            cardSize="col-2"
          />
        </section>
      </DynamicHead>
    </>
  );
};

export default LiverpoolDetailsPage;
