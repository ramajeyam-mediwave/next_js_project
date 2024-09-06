import React from "react";
import Image from "next/image";

import Gallery1 from "../../asset/image/png/company-team-pic1.png";
import Gallery2 from "../../asset/image/png/company-team-pic2.png";
import Gallery3 from "../../asset/image/png/company-team-pic3.png";
import Gallery4 from "../../asset/image/png/company-team-pic4.png";

interface GalleryProps {
  image?: any;
  addClass?: string;
}
export const Gallery: React.FC<GalleryProps> = ({ addClass }) => {
  return (
    <div className={`${addClass ? addClass : ""}`}>
      <div className="gallery_block">
        <Image
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          src={Gallery1}
          alt="Gallery 1"
        />
        <Image
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          src={Gallery2}
          alt="Gallery 2"
        />
        <Image
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          src={Gallery3}
          alt="Gallery 3"
        />
        <Image
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          src={Gallery4}
          alt="Gallery 4"
        />
      </div>
    </div>
  );
};
