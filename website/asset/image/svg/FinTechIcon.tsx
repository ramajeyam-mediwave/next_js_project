import React from "react";

interface FinTechIconProps {
  stroke?: string;
  addClass?: string;
}

export const FinTechIcon: React.FC<FinTechIconProps> = ({
  stroke,
  addClass,
}) => {
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
        d="M10.5 5.83331V10.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 10.5H9.33333C8.689 10.5 8.16667 11.0223 8.16667 11.6667V16.3333C8.16667 16.9777 8.689 17.5 9.33333 17.5H11.6667C12.311 17.5 12.8333 16.9777 12.8333 16.3333V11.6667C12.8333 11.0223 12.311 10.5 11.6667 10.5Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 17.5V19.8333"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8333 3.5V5.83333"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5.83331H18.6667C18.0223 5.83331 17.5 6.35565 17.5 6.99998V14C17.5 14.6443 18.0223 15.1666 18.6667 15.1666H21C21.6443 15.1666 22.1667 14.6443 22.1667 14V6.99998C22.1667 6.35565 21.6443 5.83331 21 5.83331Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8333 15.1667V18.6667"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 3.5V24.5H24.5"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
