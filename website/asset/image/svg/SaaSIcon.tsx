import React from "react";

interface SaasIconProps {
  stroke?: string;
  addClass?: string;
}

export const SaasIcon: React.FC<SaasIconProps> = ({ stroke, addClass }) => {
  return (
    <svg
      className={addClass}
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1062_1765)">
        <path
          style={{ stroke: `${stroke}` }}
          d="M2 24.6667H23"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M5.5 19.9999V11.8333"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M10.1667 19.9999V11.8333"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M14.8333 19.9999V11.8333"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M19.5 19.9999V11.8333"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M12.5 1.33325L21.8333 7.16659H3.16666L12.5 1.33325Z"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1062_1765">
          <rect
            width="25"
            height="26"
            fill="white"
            style={{ fill: `${stroke}` }}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
