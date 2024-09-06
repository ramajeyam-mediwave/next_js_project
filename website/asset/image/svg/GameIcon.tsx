import React from "react";

interface GameIconProps {
  stroke?: string;
  addClass?: string;
}

export const GameIcon: React.FC<GameIconProps> = ({ stroke, addClass }) => {
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
        d="M7 12.8334H11.6667"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33334 10.5V15.1667"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14H17.5117"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 11.6666H21.0117"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2067 5.83337H7.79334C6.63867 5.83364 5.52509 6.26198 4.66788 7.03558C3.81067 7.80918 3.2707 8.87312 3.15234 10.0217C3.14534 10.0824 3.14068 10.1395 3.13251 10.199C3.03801 10.9854 2.33334 16.8654 2.33334 18.6667C2.33334 19.595 2.70209 20.4852 3.35847 21.1416C4.01485 21.798 4.90509 22.1667 5.83334 22.1667C7.00001 22.1667 7.58334 21.5834 8.16668 21L9.81634 19.3504C10.2538 18.9128 10.8472 18.6668 11.466 18.6667H16.534C17.1528 18.6668 17.7462 18.9128 18.1837 19.3504L19.8333 21C20.4167 21.5834 21 22.1667 22.1667 22.1667C23.0949 22.1667 23.9852 21.798 24.6416 21.1416C25.2979 20.4852 25.6667 19.595 25.6667 18.6667C25.6667 16.8642 24.962 10.9854 24.8675 10.199C24.8593 10.1407 24.8547 10.0824 24.8477 10.0229C24.7296 8.87407 24.1897 7.80986 23.3325 7.03601C22.4753 6.26217 21.3615 5.83367 20.2067 5.83337Z"
        stroke="white"
        style={{ stroke: `${stroke}` }}
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
