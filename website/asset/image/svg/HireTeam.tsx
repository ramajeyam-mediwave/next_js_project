import React from "react";

interface HireTeamProps {
  stroke?: string;
  addClass?: string;
}

export const HireTeam: React.FC<HireTeamProps> = ({ stroke, addClass }) => {
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
      <path
        d="M34.0003 34.1667C37.222 34.1667 39.8337 31.555 39.8337 28.3333C39.8337 25.1117 37.222 22.5 34.0003 22.5C30.7787 22.5 28.167 25.1117 28.167 28.3333C28.167 31.555 30.7787 34.1667 34.0003 34.1667Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.3337 43.5001C43.3337 41.0247 42.3503 38.6508 40.6 36.9004C38.8496 35.1501 36.4757 34.1667 34.0003 34.1667C31.525 34.1667 29.151 35.1501 27.4007 36.9004C25.6503 38.6508 24.667 41.0247 24.667 43.5001"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
