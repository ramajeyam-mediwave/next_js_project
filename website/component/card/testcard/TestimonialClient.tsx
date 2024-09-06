import React from "react";
import Image from "next/image";
import Quotes from "../../../asset/image/svg/Quotes";

interface TestimonialClientProps {
  content?: string;
  image?: any;
  addClass?: string;
  testiName?: string;
  testiDesgination?: string;
  alt?: string;
}
export const TestimonialClient: React.FC<TestimonialClientProps> = ({
  content,
  image,
  addClass,
  testiName,
  testiDesgination,
  alt,
}) => {
  return (
    <div className={`bg-bgGray p-8 rounded-sm ${addClass ? addClass : ""}`}>
      <div className="flex flex-col gap-6">
        <Quotes />
        <>
          <p>{content}</p>
        </>
      </div>
      <div className="flex flex-row gap-6 items-center pt-8 max-md:block">
        {/* <div className="rounded-full object-cover w-20 h-20 max-md:w-16 max-md:h-16 mx-auto flex-none max-md:ml-0 mb-2">
          <Image
            width={80}
            height={80}
            src={image}
            alt={alt || "client team"}
          />
        </div> */}
        <div className="flex-auto ">
          <p className="text-xl font-bold">{testiName}</p>
          <p className="text-base">{testiDesgination}</p>
        </div>
      </div>
    </div>
  );
};
