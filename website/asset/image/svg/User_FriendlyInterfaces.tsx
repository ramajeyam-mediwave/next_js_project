import React from "react";

interface User_FriendlyInterfacesProps {
  stroke?: string;
  addClass?: string;
}

export const User_FriendlyInterfaces: React.FC<
  User_FriendlyInterfacesProps
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
        d="M45 22H23C22.4696 22 21.9609 22.2107 21.5858 22.5858C21.2107 22.9609 21 23.4696 21 24V42C21 42.5304 21.2107 43.0391 21.5858 43.4142C21.9609 43.7893 22.4696 44 23 44H45C45.5304 44 46.0391 43.7893 46.4142 43.4142C46.7893 43.0391 47 42.5304 47 42V24C47 23.4696 46.7893 22.9609 46.4142 22.5858C46.0391 22.2107 45.5304 22 45 22ZM45 24V29H23V24H45ZM23 31H30V42H23V31ZM45 42H32V31H45V42Z"
        fill="white"
      />
    </svg>
  );
};
