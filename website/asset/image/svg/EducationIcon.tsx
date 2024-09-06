import React from "react";

interface EducationIconProps {
  stroke?: string;
  addClass?: string;
}

export const EducationIcon: React.FC<EducationIconProps> = ({
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
        d="M2.33334 3.5H9.33334C10.571 3.5 11.758 3.99167 12.6332 4.86683C13.5083 5.742 14 6.92899 14 8.16667V24.5C14 23.5717 13.6313 22.6815 12.9749 22.0251C12.3185 21.3687 11.4283 21 10.5 21H2.33334V3.5Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6667 3.5H18.6667C17.429 3.5 16.242 3.99167 15.3668 4.86683C14.4917 5.742 14 6.92899 14 8.16667V24.5C14 23.5717 14.3687 22.6815 15.0251 22.0251C15.6815 21.3687 16.5717 21 17.5 21H25.6667V3.5Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9.33337H9.33333"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14H9.33333"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 9.33337H21"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 14H21"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
