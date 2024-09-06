import React, { useState } from "react";
import { MegaContact } from "../../component/MegaInterview/MegaContact";
import { ListCard } from "../../component/card/listcard/ListCard";
import DynamicHead from "../../component/head/DynamicHead";
import { interviewCardData } from "../../userdata/UserData";

interface MegaWalkinProps {
  InterViewexpireDate?: any;
}

const MegaWalkin: React.FC<MegaWalkinProps> = ({ InterViewexpireDate }) => {
  const expireDate = InterViewexpireDate;
  const today = new Date();
  const expiretime = new Date(expireDate);
  if (today.getTime() >= expiretime.getTime()) {
    return (
      <div className="walkin_heading">
        <span className="card_heading">
          <h1>
            <span className=" text-4xl md:text-6xl">Mega </span>
            <span className=" text-4xl md:text-6xl">Walk-in</span>
          </h1>
        </span>
        <h4 className="mega_expiry_heading">
          Registration for the mega walk-in event has now been completed.
        </h4>
      </div>
    );
  }
  return (
    <>
      <DynamicHead
        title="Mega Walk-in"
        image="https://www.mediwavedigital.com/og-images/contact-og.png"
        description="We are just a click away, feel free to drop your questions. Our team will get in touch with you as soon as possible!"
      >
        <section className=" ">
          <div className="form-list-card single_background_image">
            <ListCard
              addClass="contact_block"
              heading1="Mega "
              heading2="Walk-in"
              iconClick
              userdata={interviewCardData}
              parentClass="contact_background_images"
              AlignLeft={true}
            >
              <MegaContact />
            </ListCard>
          </div>
        </section>
        <section className="map-container main_section">
          <iframe src="https://maps.google.com/maps?width=1795&amp;height=515&amp;hl=en&amp;q=Plot%20No.73,%202nd%20Cross%20St,%20Aziz%20Nagar,%20Reddiarpalayam,%20Puducherry,%20605010%20Pondicherry+(Mediwave%20Digital%20Private%20Limited)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
        </section>
      </DynamicHead>
    </>
  );
};

export default MegaWalkin;
