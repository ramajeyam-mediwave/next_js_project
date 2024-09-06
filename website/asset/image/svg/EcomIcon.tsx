import React from "react";

interface EcomIconProps {
  stroke?: string;
  addClass?: string;
}

export const EcomIcon: React.FC<EcomIconProps> = ({ stroke, addClass }) => {
  return (
    <svg
      className={addClass}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33332 25.6666C9.97766 25.6666 10.5 25.1443 10.5 24.5C10.5 23.8556 9.97766 23.3333 9.33332 23.3333C8.68899 23.3333 8.16666 23.8556 8.16666 24.5C8.16666 25.1443 8.68899 25.6666 9.33332 25.6666Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1667 25.6666C22.811 25.6666 23.3333 25.1443 23.3333 24.5C23.3333 23.8556 22.811 23.3333 22.1667 23.3333C21.5223 23.3333 21 23.8556 21 24.5C21 25.1443 21.5223 25.6666 22.1667 25.6666Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.39166 2.39166H4.725L7.82833 16.8817C7.94217 17.4123 8.23744 17.8867 8.66333 18.2232C9.08921 18.5596 9.61905 18.7371 10.1617 18.725H21.5717C22.1027 18.7241 22.6176 18.5422 23.0312 18.2091C23.4448 17.8761 23.7325 17.4119 23.8467 16.8933L25.7717 8.225H5.97333"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
