import React from "react";

interface ITIconProps {
  stroke?: string;
  addClass?: string;
}

export const ITIcon: React.FC<ITIconProps> = ({ stroke, addClass }) => {
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
        d="M21 4.66663H6.99999C5.71133 4.66663 4.66666 5.71129 4.66666 6.99996V21C4.66666 22.2886 5.71133 23.3333 6.99999 23.3333H21C22.2887 23.3333 23.3333 22.2886 23.3333 21V6.99996C23.3333 5.71129 22.2887 4.66663 21 4.66663Z"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3333 10.5H11.6667C11.0223 10.5 10.5 11.0223 10.5 11.6667V16.3333C10.5 16.9777 11.0223 17.5 11.6667 17.5H16.3333C16.9777 17.5 17.5 16.9777 17.5 16.3333V11.6667C17.5 11.0223 16.9777 10.5 16.3333 10.5Z"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 2.33337V4.66671"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 23.3334V25.6667"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.33334 17.5H4.66668"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.33334 10.5H4.66668"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3333 17.5H25.6667"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3333 10.5H25.6667"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 2.33337V4.66671"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 23.3334V25.6667"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
