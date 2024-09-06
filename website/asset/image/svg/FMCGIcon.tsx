import React from "react";

interface FMCGIconProps {
  stroke?: string;
  addClass?: string;
}

export const FMCGIcon: React.FC<FMCGIconProps> = ({ stroke, addClass }) => {
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
        d="M7 2.33334L3.5 7.00001V23.3333C3.5 23.9522 3.74583 24.5457 4.18342 24.9833C4.621 25.4208 5.21449 25.6667 5.83333 25.6667H22.1667C22.7855 25.6667 23.379 25.4208 23.8166 24.9833C24.2542 24.5457 24.5 23.9522 24.5 23.3333V7.00001L21 2.33334H7Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 7H24.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 11.6667C18.6667 12.9043 18.175 14.0913 17.2998 14.9665C16.4247 15.8417 15.2377 16.3333 14 16.3333C12.7623 16.3333 11.5753 15.8417 10.7002 14.9665C9.82501 14.0913 9.33334 12.9043 9.33334 11.6667"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
