import React from "react";

interface CustomAR_VRProps {
  stroke?: string;
  addClass?: string;
}

export const CustomAR_VR: React.FC<CustomAR_VRProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="68"
      height="67"
      viewBox="0 0 68 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="33.5" r="33.5" />
      <g clipPath="url(#clip0_1473_3644)">
        <path
          d="M34.9998 28L30.6998 23.7C30.2482 23.2506 29.637 22.9983 28.9998 22.9983C28.3627 22.9983 27.7514 23.2506 27.2998 23.7L24.6998 26.3C24.2504 26.7517 23.998 27.3629 23.998 28C23.998 28.6372 24.2504 29.2484 24.6998 29.7L28.9998 34"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 27L32 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 37L42 35"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39 32L43.3 36.3C44.24 37.24 44.24 38.76 43.3 39.7L40.7 42.3C39.76 43.24 38.24 43.24 37.3 42.3L33 38"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.1739 27.8119C43.7026 27.2833 43.9997 26.5664 43.9998 25.8187C43.9999 25.0711 43.703 24.3541 43.1744 23.8254C42.6459 23.2967 41.9289 22.9996 41.1813 22.9995C40.4337 22.9994 39.7166 23.2963 39.1879 23.8249L25.8419 37.1739C25.6098 37.4054 25.438 37.6904 25.3419 38.0039L24.0209 42.3559C23.9951 42.4424 23.9931 42.5342 24.0153 42.6217C24.0374 42.7092 24.0829 42.7891 24.1467 42.8529C24.2106 42.9167 24.2906 42.962 24.3781 42.984C24.4656 43.006 24.5575 43.0039 24.6439 42.9779L28.9969 41.6579C29.3101 41.5626 29.5951 41.392 29.8269 41.1609L43.1739 27.8119Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 26L41 30"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1473_3644">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(22 21)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
