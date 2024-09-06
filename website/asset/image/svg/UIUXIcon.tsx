import React from "react";

interface UIUXIconProps {
  stroke?: string;
  addClass?: string;
}

export const UIUXIcon: React.FC<UIUXIconProps> = ({ stroke, addClass }) => {
  return (
    <svg
      className={addClass}
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 7.19444C15.9949 7.19444 17.2067 5.97566 17.2067 4.47222C17.2067 2.96878 15.9949 1.75 14.5 1.75C13.0052 1.75 11.7933 2.96878 11.7933 4.47222C11.7933 5.97566 13.0052 7.19444 14.5 7.19444Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.32001 26.25L13.1737 6.84058"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8398 6.84058L18.4517 11.5228"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9733 14C18.7359 19.4444 10.2641 19.4444 5.02667 14"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.68 26.2501L23.7568 21.0234"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
