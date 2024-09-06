import React from "react";

interface AccordionArrowProps {
  fill: string;
  stroke: string;
  addClass?: string;
}

export const AccordionArrow: React.FC<AccordionArrowProps> = ({
  fill,
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="29"
      height="21"
      viewBox="0 0 29 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1065_2041)">
        <path
          className={fill}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0316 11.4066C22.3238 12.1145 21.1762 12.1145 20.4684 11.4066L14.5 5.43826L8.53163 11.4066C7.82381 12.1145 6.67619 12.1145 5.96837 11.4066C5.26054 10.6988 5.26054 9.55119 5.96837 8.84337L13.2184 1.59337C13.9262 0.885543 15.0738 0.885543 15.7816 1.59337L23.0316 8.84337C23.7395 9.55119 23.7395 10.6988 23.0316 11.4066Z"
        />
        <path
          className={stroke}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0316 11.4066C22.3238 12.1145 21.1762 12.1145 20.4684 11.4066L14.5 5.43826L8.53163 11.4066C7.82381 12.1145 6.67619 12.1145 5.96837 11.4066C5.26054 10.6988 5.26054 9.55119 5.96837 8.84337L13.2184 1.59337C13.9262 0.885543 15.0738 0.885543 15.7816 1.59337L23.0316 8.84337C23.7395 9.55119 23.7395 10.6988 23.0316 11.4066Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Removed shadow */}
      {/* <defs>
        <filter
          id="filter0_d_1065_2041"
          x="0.9375"
          y="0.5625"
          width="27.125"
          height="19.875"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1065_2041"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1065_2041"
            result="shape"
          />
        </filter>
      </defs> */}
    </svg>
  );
};
