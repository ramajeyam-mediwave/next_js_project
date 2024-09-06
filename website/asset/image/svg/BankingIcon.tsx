import React from "react";

interface BankingIconProps {
  stroke?: string;
  addClass?: string;
}

export const BankingIcon: React.FC<BankingIconProps> = ({
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
        d="M4.66666 2.33331V25.6666L6.99999 24.5L9.33332 25.6666L11.6667 24.5L14 25.6666L16.3333 24.5L18.6667 25.6666L21 24.5L23.3333 25.6666V2.33331L21 3.49998L18.6667 2.33331L16.3333 3.49998L14 2.33331L11.6667 3.49998L9.33332 2.33331L6.99999 3.49998L4.66666 2.33331Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3333 9.33331H9.33334"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 14H9.33334"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1667 18.6667H9.33334"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
