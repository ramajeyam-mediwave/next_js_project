import React from "react";
import Image from "next/image";
import SouthernHealth from "../../../asset/image/png/southernhealth.png";
import Alderhey from "../../../asset/image/png/alderhey.png";
import SouthLondon from "../../../asset/image/png/southlondon.png";
import NorthernCare from "../../../asset/image/png/northerncare.png";
import RolyalFreeLondon from "../../../asset/image/png/royalfreelondon.png";
import MerseySide from "../../../asset/image/png/merseyside.png";
import HandW from "../../../asset/image/png/handw.png";
import Brook from "../../../asset/image/png/brook.png";
import MSI from "../../../asset/image/png/msi.png";
import Kings from "../../../asset/image/png/Kings.png";

interface ClientProps {
  heading1?: string;
  addClass?: string;
  heading2?: string;
}

export const Client: React.FC<ClientProps> = ({
  heading1,
  addClass,
  heading2,
}) => {
  return (
    <section className={`mv-container ${addClass ? addClass : ""}`}>
      <div className="grid gap-5 lg:gap-10">
        <div className="title_section">
          <span className="multi_heading title_section animate-heading">
            {heading1 && <h2 className=" text-primaryHeading">{heading1}</h2>}
            {heading2 && <h2>{heading2}</h2>}
          </span>
        </div>
        <div className={`client_logo ${addClass ? addClass : ""}`}>
          <div className="client_block">
            <Image
              width={146}
              height={69}
              src={SouthernHealth}
              alt="southern health"
            />
          </div>
          <div className="client_block">
            <Image width={146} height={69} src={Alderhey} alt="Client 1 Logo" />
          </div>
          <div className="client_block">
            <Image
              width={146}
              height={69}
              src={SouthLondon}
              alt="south london"
            />
          </div>
          <div className="client_block">
            <Image
              width={146}
              height={69}
              src={NorthernCare}
              alt="Northern Care"
            />
          </div>
          <div className="client_block">
            <Image
              width={146}
              height={69}
              src={RolyalFreeLondon}
              alt="Royal free London"
            />
          </div>
          <div className="client_block">
            <Image width={146} height={69} src={MerseySide} alt="Mersey side" />
          </div>
          <div className="client_block">
            <Image
              width={146}
              height={69}
              src={HandW}
              alt="Herefordshire and worcestershire"
            />
          </div>
          <div className="client_block">
            <Image width={146} height={69} src={Brook} alt="Brook" />
          </div>
          <div className="client_block">
            <Image width={146} height={69} src={MSI} alt="MSI" />
          </div>
          <div className="client_block">
            <Image
              width={146}
              height={69}
              src={Kings}
              alt="Kings college london"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
