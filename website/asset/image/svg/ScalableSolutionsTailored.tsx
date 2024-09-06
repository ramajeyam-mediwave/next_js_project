import React from "react";

interface ScalableSolutionsTailoredProps {
  stroke?: string;
  addClass?: string;
}

export const ScalableSolutionsTailored: React.FC<
  ScalableSolutionsTailoredProps
> = ({ stroke, addClass }) => {
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
        d="M46 38.0001V27.3334C45.9995 26.8658 45.8761 26.4065 45.6421 26.0017C45.408 25.5968 45.0717 25.2606 44.6667 25.0268L35.3333 19.6934C34.9279 19.4594 34.4681 19.3362 34 19.3362C33.5319 19.3362 33.0721 19.4594 32.6667 19.6934L23.3333 25.0268C22.9284 25.2606 22.592 25.5968 22.3579 26.0017C22.1239 26.4065 22.0005 26.8658 22 27.3334V38.0001C22.0005 38.4677 22.1239 38.927 22.3579 39.3319C22.592 39.7368 22.9284 40.073 23.3333 40.3068L32.6667 45.6401C33.0721 45.8742 33.5319 45.9974 34 45.9974C34.4681 45.9974 34.9279 45.8742 35.3333 45.6401L44.6667 40.3068C45.0717 40.073 45.408 39.7368 45.6421 39.3319C45.8761 38.927 45.9995 38.4677 46 38.0001Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 22.28L34 25.7467L40 22.28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 43.0534V36.1334L22 32.6667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 32.6667L40 36.1334V43.0534"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3594 25.9468L33.9994 32.6801L45.6394 25.9468"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 46.1067V32.6667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
