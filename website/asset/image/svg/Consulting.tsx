import React from "react";

interface ConsultingProps {
  stroke?: string;
  addClass?: string;
}

export const Consulting: React.FC<ConsultingProps> = ({ stroke, addClass }) => {
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
        d="M35.1663 43.5V45.8333H32.833V43.5H23.4997C22.8553 43.5 22.333 42.9777 22.333 42.3333V26H45.6663V42.3333C45.6663 42.9777 45.144 43.5 44.4997 43.5H35.1663ZM24.6663 41.1667H43.333V28.3333H24.6663V41.1667ZM35.1663 30.6667H40.9997V33H35.1663V30.6667ZM35.1663 35.3333H40.9997V37.6667H35.1663V35.3333ZM30.4997 30.6667V34.1667H33.9997C33.9997 36.0997 32.4327 37.6667 30.4997 37.6667C28.5667 37.6667 26.9997 36.0997 26.9997 34.1667C26.9997 32.2336 28.5667 30.6667 30.4997 30.6667ZM22.333 22.5H45.6663V24.8333H22.333V22.5Z"
        fill="white"
      />
    </svg>
  );
};
