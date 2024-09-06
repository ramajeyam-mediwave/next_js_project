import React from "react";

interface SaaSOptimizationProps {
  stroke?: string;
  addClass?: string;
}

export const SaaSOptimization: React.FC<SaaSOptimizationProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="34" r="33.5" />
      <path
        d="M30.5 31.1666L32.8333 33.4999L37.5 28.8333"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.334 23H24.6673C23.3787 23 22.334 24.0447 22.334 25.3333V37C22.334 38.2887 23.3787 39.3333 24.6673 39.3333H43.334C44.6227 39.3333 45.6673 38.2887 45.6673 37V25.3333C45.6673 24.0447 44.6227 23 43.334 23Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 39.3333V43.9999"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.334 44H38.6673"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
