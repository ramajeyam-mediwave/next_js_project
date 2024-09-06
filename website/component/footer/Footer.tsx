import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../../asset/image/svg/mediwavelogo";
import Face from "../../asset/image/svg/facebooklogo";
import Insta from "../../asset/image/svg/instagramlogo";
import LinkedIn from "../../asset/image/svg/linkedinlogo";
import Twitter from "../../asset/image/svg/twitter";
import { ScrollToTop } from "../../component/slidetop/slide";
// import Groupicon from '../../asset/image/svg/groupicon';
import Link from "next/link";
import BG_SVG from "../../asset/image/svg/BG_SVG";
import Bg_Footer from "../../asset/image/svg/Bg_Footer";
import InterviewNotification from "../MegaInterview/InterviewNotification";
import { usePathname } from "next/navigation";
import { ServicecardData } from "../../userdata/UserData";

interface FooterProps {
  InterViewexpireDate?: any;
}

export const Footer: React.FC<FooterProps> = ({ InterViewexpireDate }) => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const expireDate = InterViewexpireDate;
  const isContactPage = router.pathname === "/2023/mega-walkin";

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const shouldShowBanner = () => {
    const today = new Date();
    const expiretime = new Date(expireDate);

    return today.getTime() <= expiretime.getTime();
  };

  const [showBanner, setShowBanner] = useState(shouldShowBanner());

  useEffect(() => {
    setShowBanner(shouldShowBanner());
  }, []);

  const pathname = usePathname();
  const [UKPage, setUKPage] = useState(false);

  useEffect(() => {
    if (pathname === "/uk/") {
      setUKPage(true);
    } else {
      setUKPage(false);
    }
  }, [pathname]);

  return (
    <>
      <footer className="footer_section">
        <div className="footer_bg_block">
          <Bg_Footer />
        </div>
        <div className="footer_container">
          <div className="mediwave_logo">
            <Logo />
          </div>

          <div className="mediwave_description">
            <div className="description_content">
              <p className="head_container lg:w-2/4">
                Plot No.73, 3rd Floor, 2nd Cross St, Ajeez Nagar,
                Reddiarpalayam, Puducherry - 605010.
              </p>
              <div className="thirdmain_container">
                <div className="follow_container">
                  <h3 className="follow_conatiner">Follow us:</h3>
                  <div className="thirdinner_footer">
                    <Link href="https://www.facebook.com/mediwavedigital">
                      <Face />
                    </Link>
                    <Link href="https://www.instagram.com/mediwavedigital/">
                      <Insta />
                    </Link>
                    <Link href="https://www.linkedin.com/company/mediwave-digital/mycompany/">
                      <LinkedIn />
                    </Link>
                    <Link href="https://twitter.com/MediwaveD?t=ghPraWtN1H841TdwxtGcGQ&s=09">
                      <Twitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {UKPage ? (
              <div></div>
            ) : (
              <div className="mainsecond_footer">
                <div className="inner_footer">
                  <Link href="/about">About</Link>
                  <Link href="/#our_work">Project</Link>
                  <Link href="/ourteam">Team</Link>
                  <Link href="/careers">Careers</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/contact">Blogs</Link>
                </div>
                <div className="inner_footer">
                  <h6 className="font-semibold">Our Services</h6>
                  {ServicecardData &&
                    ServicecardData.map((service, index) => {
                      return (
                        <Link href={`/services/${service.link}`} key={index}>
                          {service.title}
                        </Link>
                      );
                    })}

                  {/* <Link href="/web-development">Web app development</Link>
                  <Link href="/mobile-development">Mobile app development</Link>
                  <Link href="/product-development">
                    SaaS product development
                  </Link>
                  <Link href="/ar-vr-development">AR/VR development</Link>
                  <Link href="/design-services">UI/UX design services</Link>
                  <Link href="/qa-services">
                    Software testing & QA services
                  </Link> */}
                </div>
                <div className="inner_footer"></div>
              </div>
            )}
          </div>
        </div>

        <div className="final_block">
          <div className="private_group_container">
            <div className="medi_container">
              {UKPage ? (
                <p className="private_container">
                  © 2019 - {currentYear} Mediwave Digital UK. All rights
                  reserved.
                </p>
              ) : (
                <p className="private_container">
                  © 2019 - {currentYear} Mediwave Digital Private Limited. All
                  rights reserved.
                </p>
              )}
            </div>
            <ScrollToTop
              addClass={!isContactPage && showBanner ? "with-notification" : ""}
            />
            {!isContactPage ? (
              <InterviewNotification
                showBanner={showBanner}
                onClose={handleCloseBanner}
              />
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
};
