import React from "react";

interface WebDevIconProps {
  stroke?: string;
  addClass?: string;
}

export const WebDevIcon: React.FC<WebDevIconProps> = ({ stroke, addClass }) => {
  return (
    <svg
      className={addClass}
      width="29"
      height="24"
      viewBox="0 0 29 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ stroke: `${stroke}` }}
        d="M25.3267 16.4604V3.9604C25.3267 3.22368 25.0415 2.51714 24.5339 1.99621C24.0263 1.47527 23.3379 1.18262 22.62 1.18262H6.38C5.66215 1.18262 4.9737 1.47527 4.4661 1.99621C3.9585 2.51714 3.67333 3.22368 3.67333 3.9604V16.4604M25.3267 16.4604H3.67333M25.3267 16.4604L27.0589 20.0021C27.1633 20.2145 27.2127 20.451 27.2024 20.6887C27.1921 20.9264 27.1225 21.1574 27.0002 21.3595C26.878 21.5617 26.7071 21.7282 26.5041 21.8432C26.3011 21.9581 26.0728 22.0176 25.8409 22.016H3.15907C2.92723 22.0176 2.69886 21.9581 2.49586 21.8432C2.29286 21.7282 2.12204 21.5617 1.99977 21.3595C1.8775 21.1574 1.80789 20.9264 1.79761 20.6887C1.78733 20.451 1.83673 20.2145 1.94107 20.0021L3.67333 16.4604"
        stroke="white"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
