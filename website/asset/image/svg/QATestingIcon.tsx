import React from "react";

interface QATestingIconProps {
  stroke?: string;
  addClass?: string;
}

export const QATestingIcon: React.FC<QATestingIconProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1064_1784)">
        <path
          d="M8.83334 1.33337L11.0267 3.52671"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9733 3.52671L18.1667 1.33337"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99999 7.31831V6.15164C9.97884 5.67885 10.0537 5.20667 10.2201 4.7636C10.3864 4.32053 10.6408 3.91576 10.9679 3.57371C11.295 3.23167 11.688 2.95944 12.1232 2.77345C12.5584 2.58746 13.0267 2.49158 13.5 2.49158C13.9733 2.49158 14.4416 2.58746 14.8768 2.77345C15.312 2.95944 15.705 3.23167 16.0321 3.57371C16.3592 3.91576 16.6136 4.32053 16.7799 4.7636C16.9463 5.20667 17.0211 5.67885 17 6.15164V7.31831"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 22.3333C9.65 22.3333 6.5 19.1833 6.5 15.3333V11.8333C6.5 10.5956 6.99167 9.40863 7.86683 8.53346C8.742 7.65829 9.92899 7.16663 11.1667 7.16663H15.8333C17.071 7.16663 18.258 7.65829 19.1332 8.53346C20.0083 9.40863 20.5 10.5956 20.5 11.8333V15.3333C20.5 19.1833 17.35 22.3333 13.5 22.3333Z"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 22.3334V11.8334"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.11833 9.50004C4.86667 9.26671 3 7.28337 3 4.83337"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.50001 14.1666H1.83334"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 23.5C3 21.05 4.98333 18.95 7.43333 18.8334"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.965 4.83337C23.965 7.28337 22.0983 9.26671 19.8817 9.50004"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.1667 14.1666H20.5"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5667 18.8334C22.0167 18.95 24 21.05 24 23.5"
          stroke="white"
          style={{ stroke: `${stroke}` }}
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1064_1784">
          <rect
            width="27"
            height="25"
            fill="white"
            style={{ fill: `${stroke}` }}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
