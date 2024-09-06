import React from "react";
import Image, { StaticImageData } from "next/image";

type dataValue = {
  id: number|string;
  imgage: StaticImageData;
  alt: string;
};
interface ImageSilderProps {
  title: string;
  sliderData: dataValue[];
}

const ImageSilder: React.FC<ImageSilderProps> = ({title,sliderData}) => {
  return (
    <>
      <h2 className="mv-container imgTitle">{title}</h2>
      <div className="imageContainer mv-container">
        <div className="carousel">
          <div className="carouselTrack">
            {sliderData.map((item: any) => (
              <div key={item.id} className="carouselItem" style={{minWidth: `calc(100% / ${sliderData.length})`}}>
                <Image src={item.imgage} alt={item.alt} />
              </div>
            ))}
            {sliderData.map((item: any) => (
              <div key={item.id + sliderData.length} className="carouselItem" style={{minWidth: `calc(100% / ${sliderData.length})`}}>
                <Image src={item.imgage} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageSilder;
