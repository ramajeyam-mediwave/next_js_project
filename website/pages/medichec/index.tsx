import Image from "next/image";
import DynamicHead from "../../component/head/DynamicHead";
import MockupGroup from "../../asset/image/medichec-mockup-group.png";
import Mobile1 from "../../asset/image/medichec-mockup1.png";
import Mobile2 from "../../asset/image/medichec-mockup2.png";
import Mobile3 from "../../asset/image/medichec-mockup3.png";
import BG_SVG from "../../asset/image/svg/BG_SVG";
import DetailsCoverPattern from "../../asset/image/svg/DetailsCoverPattern";
import { ProjectCard } from "../../component/card/projectinfo/ProjectCard";
import { ProjectCardData } from "../../userdata/ProjectData";

const StatsDetails = [
  {
    id: 1,
    name: "Project name",
    content: "Medichec",
  },
  {
    id: 2,
    name: "Trust name",
    content: "South London and Maudsley NHS Foundation Trust",
  },
  {
    id: 3,
    name: "Industry",
    content: "Health Care",
  },
  {
    id: 4,
    name: "Location",
    content: "London",
  },
  {
    id: 5,
    name: "Scope",
    content: "Digital Portal",
  },
  {
    id: 6,
    name: "Tech stack",
    content: "Angular, NodeJs, Mongodb, Cordova and Mongodb",
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

const MedichecDetailsPage = () => {
  return (
    <>
      <DynamicHead
        pageURL="https://ramajeyam-mediwave.github.io/next_js_project/oxcare"
        image="https://ramajeyam-mediwave.github.io/next_js_project/og-images/oxcare-og.png"
        title="About the project - Oxcare"
        description="Starting in January 2020, Mediwave and Oxleas have joined forces to streamline 27 business objectives under four key domains: Care, Community, Trackers, and Tools. The Oxcare platform, accessible through NHS login credentials, enables patients to manage their health records, care plans, appointments, and personalised educational materials."
      >
        <section className="project-details-cover medichec">
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
              Medichec meticulously identifies medications that are reported to
              cause dizziness and drowsiness, and ranks them based on the
              frequency of adverse effects reported. These symptoms can worsen
              cognitive impairment and lead to confusion among older
              individuals, significantly heightening the risk of falls.
            </p>
          </div>
        </section>
        <section className="content-section short">
          <div className="content-container short">
            <h2 className="section-heading">Problem statement</h2>
            <p>
              Medichec strives to address the notable problem of
              medication-induced dizziness and drowsiness among older
              individuals, which can worsen cognitive impairment and increase
              the risk of falls. Through the identification of medications with
              anticholinergic effects and their ranking according to reported
              adverse effects frequency, Medichec aims to reduce the potential
              risks linked with these medications, ultimately enhancing patient
              safety and wellbeing.
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
            <div className="h-20"></div>
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
              The standout feature of the platform is its dedicated emphasis on
              mental health, bolstered by a tailored questionnaire builder and
              seamless integration with RiO. This integration elevates both user
              experience and clinical efficacy.
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
            userdata={[ProjectCardData[2], ProjectCardData[4]]}
            cardSize="col-2"
          />
        </section>
      </DynamicHead>
    </>
  );
};

export default MedichecDetailsPage;
