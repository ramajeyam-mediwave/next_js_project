import React from "react";

interface SaaSPlatformProps {
  stroke?: string;
  addClass?: string;
}

export const SaaSPlatform: React.FC<SaaSPlatformProps> = ({
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
      <path
        d="M45 22H27C26.4696 22 25.9609 22.2107 25.5858 22.5858C25.2107 22.9609 25 23.4696 25 24V26H23C22.4696 26 21.9609 26.2107 21.5858 26.5858C21.2107 26.9609 21 27.4696 21 28V42C21 42.5304 21.2107 43.0391 21.5858 43.4142C21.9609 43.7893 22.4696 44 23 44H41C41.5304 44 42.0391 43.7893 42.4142 43.4142C42.7893 43.0391 43 42.5304 43 42V40H45C45.5304 40 46.0391 39.7893 46.4142 39.4142C46.7893 39.0391 47 38.5304 47 38V24C47 23.4696 46.7893 22.9609 46.4142 22.5858C46.0391 22.2107 45.5304 22 45 22ZM41 28V30H23V28H41ZM41 42H23V32H41V42ZM45 38H43V28C43 27.4696 42.7893 26.9609 42.4142 26.5858C42.0391 26.2107 41.5304 26 41 26H27V24H45V38Z"
        fill="white"
      />
    </svg>
  );
};
