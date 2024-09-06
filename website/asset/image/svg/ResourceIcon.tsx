import React from "react";

interface ResourceIconProps {
  stroke?: string;
  addClass?: string;
}

export const ResourceIcon: React.FC<ResourceIconProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1064_1797)">
        <path
          d="M18.1667 22.5V20.1667C18.1667 18.929 17.675 17.742 16.7998 16.8668C15.9247 15.9917 14.7377 15.5 13.5 15.5H6.5C5.26232 15.5 4.07534 15.9917 3.20017 16.8668C2.325 17.742 1.83333 18.929 1.83333 20.1667V22.5"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 10.8333C12.5773 10.8333 14.6667 8.744 14.6667 6.16667C14.6667 3.58934 12.5773 1.5 10 1.5C7.42267 1.5 5.33333 3.58934 5.33333 6.16667C5.33333 8.744 7.42267 10.8333 10 10.8333Z"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.1667 22.4999V20.1666C25.1659 19.1326 24.8217 18.1282 24.1883 17.311C23.5548 16.4938 22.6678 15.9101 21.6667 15.6516"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1667 1.65161C19.1705 1.90863 20.0602 2.49243 20.6956 3.31097C21.3309 4.12952 21.6758 5.13625 21.6758 6.17244C21.6758 7.20864 21.3309 8.21537 20.6956 9.03392C20.0602 9.85246 19.1705 10.4363 18.1667 10.6933"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1064_1797">
          <rect
            width="27"
            height="24"
            fill="white"
            style={{ fill: `${stroke}` }}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
