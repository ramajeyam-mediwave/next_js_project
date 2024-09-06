import React, { useState } from 'react';
// import Accordion from '../../component/accordion/Accordion';
import { Herocard } from '../../component/card/herocard/Herocard';
import Img2 from '../../asset/image/svg/Heroimg2';
import Arrow from '../../asset/image/svg/Arrow';
import BG_SVG from '../../asset/image/svg/BG_SVG';
import Uparrowimage from '../../asset/image/svg/Uparrowimage';
import DownArrow from '../../asset/image/svg/DownArrow';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Router from 'next/router';
import { MailTo } from '../../component/MailTo';
import DynamicHead from '../../component/head/DynamicHead';

const Devjob = () => {
    const [showAccordion, setAccordion] = useState(false);
    const handleClickScroll = (e: any) => {
        const element = document.getElementById('accordion__heading-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {/* <DynamicHead
                title='React JS Developer'
                image='https://www.mediwavedigital.com/og-images/career-og.png'
                description='We are looking for a React.js developer with a minimum of 2 year’s experience responsible for managing the interchange of data between the server.'
            >
                <section className='main_section bg-gray-block develop_circle_background'>
                    <div className='mv-container'>
                        <div className='back_section'>
                            <span
                                onClick={() => Router.push('/careers')}
                                className='back_arrow'
                            >
                                <Arrow />
                                <p>Back to Careers</p>
                            </span>
                        </div>
                        <span className='multi_heading text_des mb-0'>
                            <h1 className='heading_story text_des mb-[45px]'>React JS</h1>
                            <h1 className='heading_story text_des mb-[45px]'>Developer</h1>
                        </span>
                    </div>

                    <section className='mv-container'>
                        <Accordion preExpanded={['1']}>
                            <AccordionItem uuid='1' onClick={handleClickScroll}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className={`accordion-head`}>About job:</div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='accordion_space_block mb-[20px]'>
                                        <div className='accordion_content'>
                                            <h2>Job Description</h2>
                                            <p className='mb-[20px]'>
                                                We are looking for a great JavaScript developer
                                                proficient with React.js developer with 2 to 3 years of
                                                experience. Your primary focus will be developing user
                                                interface components and implementing them following
                                                well-known React.js workflows (such as Flux or Redux).
                                                You will ensure that these components and the overall
                                                application are robust and easy to maintain. In
                                                addition, you will coordinate with the rest of the team
                                                working on different layers of the infrastructure.
                                                Therefore, a commitment to collaborative problem
                                                solving, sophisticated design, and a quality product are
                                                essential.
                                            </p>
                                        </div>
                                        <div className='accordion_content'>
                                            <h2>Responsibilities:</h2>

                                            <span>
                                                <li>
                                                    Developing new user-facing features using React.js
                                                </li>
                                                <li>
                                                    Developing mobile applications by using React Native.
                                                </li>
                                                <li>
                                                    Building reusable components and front-end libraries
                                                    for future use.
                                                </li>
                                                <li>
                                                    Translating designs and wireframes into high-quality
                                                    code.
                                                </li>
                                                <li>
                                                    Optimising components for maximum performance across a
                                                    vast array of web-capable devices and browsers.
                                                </li>
                                            </span>
                                        </div>
                                        <div className='accordion_content'>
                                            <h2>Requirements:</h2>
                                            <li>
                                                Strong proficiency in JavaScript, including DOM
                                                manipulation and the JavaScript object model.
                                            </li>
                                            <li>
                                                Thorough understanding of React.js and its core
                                                principles.
                                            </li>
                                            <li>
                                                Experience with popular React.js workflows (such as Flux
                                                or Redux).
                                            </li>
                                            <li>Familiarity with RESTful APIs.</li>
                                            <li>
                                                Knowledge of modern authorisation mechanisms, such as
                                                OAUTH and JWT token.
                                            </li>
                                            <li>
                                                Familiarity with modern front-end build pipelines and
                                                tools.
                                            </li>
                                            <li>
                                                Ability to understand business requirements and
                                                translate them into technical requirements.
                                            </li>
                                            <li>A knack for benchmarking and optimisation.</li>
                                            <li>
                                                Familiarity with code versioning tools such as Git.
                                            </li>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid='2' onClick={handleClickScroll}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className={`accordion-head`}>About us:</div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='accordion_space_block'>
                                        <p className='accordion_para'>
                                            We believe a happy employee is a productive employee. As a
                                            company catering to the healthcare industry, we are making
                                            an impact in the world of health and wellbeing by creating
                                            products and services that genuinely meet the needs of
                                            end-users. All our products and services are
                                            evidence-driven. We test, we learn, and we deliver
                                            high-quality products.
                                        </p>

                                        <p className='accordion_para'>
                                            Our team consists of people from all walks of life
                                            including designers, developers, testers, DevOps
                                            engineers, project managers and researchers who are
                                            passionate about learning and delivering. We work closely
                                            with clinicians and other third parties to ensure we are
                                            utilising the best brains in the business across many
                                            sectors.
                                        </p>
                                        <p className='accordion_para'>
                                            We are always employee-first. Once you are part of our
                                            team, you reap the best benefits from the best package to
                                            Diwali bonus, Annual performance bonus, Medical Insurance
                                            and Life insurance- for you and your family, etc.
                                        </p>
                                        <p className='accordion_para'>
                                            If you want to be a part of our small but growing team and
                                            work in a fun environment, we would love to hear from you.
                                        </p>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid='3' onClick={handleClickScroll}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className={`accordion-head`}>
                                            To apply, please send us:
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='accordion_space_block mb-[20px]'>
                                        <span>
                                            <li>
                                                CV - showing your key skills, interests and personality
                                            </li>
                                            <li>
                                                Short cover letter - why is working at Mediwave Digital
                                                right for you?
                                            </li>
                                        </span>
                                        <p className='link_accordion'>
                                            Applications should be sent to{' '}
                                            <MailTo email='mediwave@mindwaveventures.com'>
                                                mediwave@mindwaveventures.com
                                            </MailTo>{' '}
                                        </p>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </section>
            </DynamicHead> */}
        </>
    );
};
export default Devjob;
