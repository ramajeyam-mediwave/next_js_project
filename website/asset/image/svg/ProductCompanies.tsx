import React from "react";

interface ProductCompaniesProps {
  stroke?: string;
  addClass?: string;
}

export const ProductCompanies: React.FC<ProductCompaniesProps> = ({
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
        d="M49 43H47V29C47.2652 29 47.5196 28.8946 47.7071 28.7071C47.8946 28.5196 48 28.2652 48 28C48 27.7348 47.8946 27.4804 47.7071 27.2929C47.5196 27.1054 47.2652 27 47 27H41V23C41.2652 23 41.5196 22.8946 41.7071 22.7071C41.8946 22.5196 42 22.2652 42 22C42 21.7348 41.8946 21.4804 41.7071 21.2929C41.5196 21.1054 41.2652 21 41 21H23C22.7348 21 22.4804 21.1054 22.2929 21.2929C22.1054 21.4804 22 21.7348 22 22C22 22.2652 22.1054 22.5196 22.2929 22.7071C22.4804 22.8946 22.7348 23 23 23V43H21C20.7348 43 20.4804 43.1054 20.2929 43.2929C20.1054 43.4804 20 43.7348 20 44C20 44.2652 20.1054 44.5196 20.2929 44.7071C20.4804 44.8946 20.7348 45 21 45H49C49.2652 45 49.5196 44.8946 49.7071 44.7071C49.8946 44.5196 50 44.2652 50 44C50 43.7348 49.8946 43.4804 49.7071 43.2929C49.5196 43.1054 49.2652 43 49 43ZM45 29V43H41V29H45ZM25 23H39V43H36V37C36 36.7348 35.8946 36.4804 35.7071 36.2929C35.5196 36.1054 35.2652 36 35 36H29C28.7348 36 28.4804 36.1054 28.2929 36.2929C28.1054 36.4804 28 36.7348 28 37V43H25V23ZM34 43H30V38H34V43ZM27 27C27 26.7348 27.1054 26.4804 27.2929 26.2929C27.4804 26.1054 27.7348 26 28 26H30C30.2652 26 30.5196 26.1054 30.7071 26.2929C30.8946 26.4804 31 26.7348 31 27C31 27.2652 30.8946 27.5196 30.7071 27.7071C30.5196 27.8946 30.2652 28 30 28H28C27.7348 28 27.4804 27.8946 27.2929 27.7071C27.1054 27.5196 27 27.2652 27 27ZM33 27C33 26.7348 33.1054 26.4804 33.2929 26.2929C33.4804 26.1054 33.7348 26 34 26H36C36.2652 26 36.5196 26.1054 36.7071 26.2929C36.8946 26.4804 37 26.7348 37 27C37 27.2652 36.8946 27.5196 36.7071 27.7071C36.5196 27.8946 36.2652 28 36 28H34C33.7348 28 33.4804 27.8946 33.2929 27.7071C33.1054 27.5196 33 27.2652 33 27ZM27 32C27 31.7348 27.1054 31.4804 27.2929 31.2929C27.4804 31.1054 27.7348 31 28 31H30C30.2652 31 30.5196 31.1054 30.7071 31.2929C30.8946 31.4804 31 31.7348 31 32C31 32.2652 30.8946 32.5196 30.7071 32.7071C30.5196 32.8946 30.2652 33 30 33H28C27.7348 33 27.4804 32.8946 27.2929 32.7071C27.1054 32.5196 27 32.2652 27 32ZM33 32C33 31.7348 33.1054 31.4804 33.2929 31.2929C33.4804 31.1054 33.7348 31 34 31H36C36.2652 31 36.5196 31.1054 36.7071 31.2929C36.8946 31.4804 37 31.7348 37 32C37 32.2652 36.8946 32.5196 36.7071 32.7071C36.5196 32.8946 36.2652 33 36 33H34C33.7348 33 33.4804 32.8946 33.2929 32.7071C33.1054 32.5196 33 32.2652 33 32Z"
        fill="white"
      />
    </svg>
  );
};
