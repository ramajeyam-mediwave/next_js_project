import React from "react";

interface UsabilityTestingProps {
  stroke?: string;
  addClass?: string;
}

export const UsabilityTesting: React.FC<UsabilityTestingProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="68"
      height="67"
      viewBox="0 0 68 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="33.5" r="33.5" />
      <g clipPath="url(#clip0_1473_3947)">
        <path
          d="M32.3333 28.3333H25.3333C24.0447 28.3333 23 29.3779 23 30.6666V42.3333C23 43.6219 24.0447 44.6666 25.3333 44.6666H32.3333C33.622 44.6666 34.6667 43.6219 34.6667 42.3333V30.6666C34.6667 29.3779 33.622 28.3333 32.3333 28.3333Z"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.334 23.6666C25.334 23.0477 25.5798 22.4543 26.0174 22.0167C26.455 21.5791 27.0485 21.3333 27.6673 21.3333H41.6673C42.2862 21.3333 42.8796 21.5791 43.3172 22.0167C43.7548 22.4543 44.0007 23.0477 44.0007 23.6666V42.3333C44.0007 42.9521 43.7548 43.5456 43.3172 43.9832C42.8796 44.4208 42.2862 44.6666 41.6673 44.6666H38.8673"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.834 40H28.8457"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1473_3947">
          <rect
            width="25"
            height="26"
            fill="white"
            style={{ fill: `${stroke}` }}
            transform="translate(21 20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
