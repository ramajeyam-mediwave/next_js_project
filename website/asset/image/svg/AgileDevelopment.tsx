import React from "react";

interface AgileDevelopmentProps {
  stroke?: string;
  addClass?: string;
}

export const AgileDevelopment: React.FC<AgileDevelopmentProps> = ({
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
      <circle cx="34" cy="33.5" r="33.5" fill="#125E9C" />
      <path
        d="M45 23H23C22.7348 23 22.4804 23.1054 22.2929 23.2929C22.1054 23.4804 22 23.7348 22 24V43C22 43.5304 22.2107 44.0391 22.5858 44.4142C22.9609 44.7893 23.4696 45 24 45H29C29.5304 45 30.0391 44.7893 30.4142 44.4142C30.7893 44.0391 31 43.5304 31 43V37H37V39C37 39.5304 37.2107 40.0391 37.5858 40.4142C37.9609 40.7893 38.4696 41 39 41H44C44.5304 41 45.0391 40.7893 45.4142 40.4142C45.7893 40.0391 46 39.5304 46 39V24C46 23.7348 45.8946 23.4804 45.7071 23.2929C45.5196 23.1054 45.2652 23 45 23ZM29 43H24V33H29V43ZM29 31H24V25H29V31ZM37 35H31V25H37V35ZM44 39H39V33H44V39ZM44 31H39V25H44V31Z"
        fill="white"
      />
    </svg>
  );
};
