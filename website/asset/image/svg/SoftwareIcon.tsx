import React from "react";

interface SoftwareIconProps {
  stroke?: string;
  addClass?: string;
}

export const SoftwareIcon: React.FC<SoftwareIconProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="28"
      height="31"
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ stroke: `${stroke}` }}
        d="M26 20.0001V9.33345C25.9995 8.86581 25.8761 8.40653 25.6421 8.00166C25.408 7.5968 25.0717 7.2606 24.6667 7.02678L15.3333 1.69345C14.9279 1.4594 14.4681 1.33618 14 1.33618C13.5319 1.33618 13.0721 1.4594 12.6667 1.69345L3.33333 7.02678C2.92835 7.2606 2.59197 7.5968 2.35795 8.00166C2.12392 8.40653 2.00048 8.86581 2 9.33345V20.0001C2.00048 20.4677 2.12392 20.927 2.35795 21.3319C2.59197 21.7368 2.92835 22.073 3.33333 22.3068L12.6667 27.6401C13.0721 27.8742 13.5319 27.9974 14 27.9974C14.4681 27.9974 14.9279 27.8742 15.3333 27.6401L24.6667 22.3068C25.0717 22.073 25.408 21.7368 25.6421 21.3319C25.8761 20.927 25.9995 20.4677 26 20.0001Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4.28003L14 7.7467L20 4.28003"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 25.0534V18.1334L2 14.6667"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 14.6667L20 18.1334V25.0534"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.35999 7.94678L14 14.6801L25.64 7.94678"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 28.1067V14.6667"
        style={{ stroke: `${stroke}` }}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
