import React from "react";

interface HealthCareIconProps {
  stroke?: string;
  addClass?: string;
}

export const HealthCareIcon: React.FC<HealthCareIconProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ stroke: `${stroke}` }}
        d="M15 7.5V12.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 17.5H12.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 22.5H12.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10H12.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 15H25C25.663 15 26.2989 15.2634 26.7678 15.7322C27.2366 16.2011 27.5 16.837 27.5 17.5V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5H5C4.33696 27.5 3.70107 27.2366 3.23223 26.7678C2.76339 26.2989 2.5 25.663 2.5 25V13.75C2.5 13.087 2.76339 12.4511 3.23223 11.9822C3.70107 11.5134 4.33696 11.25 5 11.25H7.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 27.5V5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5V27.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
