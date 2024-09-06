import React from "react";

interface MobileappIconProps {
  stroke?: string;
  addClass?: string;
}

export const MobileappIcon: React.FC<MobileappIconProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1062_1760)">
        <path
          style={{ stroke: `${stroke}` }}
          d="M11.3333 8.33325H4.33333C3.04467 8.33325 2 9.37792 2 10.6666V22.3333C2 23.6219 3.04467 24.6666 4.33333 24.6666H11.3333C12.622 24.6666 13.6667 23.6219 13.6667 22.3333V10.6666C13.6667 9.37792 12.622 8.33325 11.3333 8.33325Z"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M4.33334 3.66659C4.33334 3.04775 4.57918 2.45425 5.01676 2.01667C5.45435 1.57908 6.04784 1.33325 6.66668 1.33325H20.6667C21.2855 1.33325 21.879 1.57908 22.3166 2.01667C22.7542 2.45425 23 3.04775 23 3.66659V22.3333C23 22.9521 22.7542 23.5456 22.3166 23.9832C21.879 24.4208 21.2855 24.6666 20.6667 24.6666H17.8667"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{ stroke: `${stroke}` }}
          d="M7.83334 20H7.84501"
          stroke="white"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1062_1760">
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
