import React from "react";

interface SecurityTestingProps {
  stroke?: string;
  addClass?: string;
}

export const SecurityTesting: React.FC<SecurityTestingProps> = ({
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
        d="M34 31C33.1595 31.0003 32.3472 31.303 31.7115 31.8529C31.0758 32.4027 30.6592 33.163 30.5378 33.9947C30.4165 34.8264 30.5985 35.674 31.0506 36.3825C31.5027 37.0911 32.1946 37.6133 33 37.8538V40C33 40.2652 33.1054 40.5196 33.2929 40.7071C33.4804 40.8946 33.7348 41 34 41C34.2652 41 34.5196 40.8946 34.7071 40.7071C34.8946 40.5196 35 40.2652 35 40V37.8538C35.8054 37.6133 36.4973 37.0911 36.9494 36.3825C37.4015 35.674 37.5835 34.8264 37.4622 33.9947C37.3408 33.163 36.9242 32.4027 36.2885 31.8529C35.6528 31.303 34.8405 31.0003 34 31ZM34 36C33.7033 36 33.4133 35.912 33.1666 35.7472C32.92 35.5824 32.7277 35.3481 32.6142 35.074C32.5006 34.7999 32.4709 34.4983 32.5288 34.2074C32.5867 33.9164 32.7296 33.6491 32.9393 33.4393C33.1491 33.2296 33.4164 33.0867 33.7074 33.0288C33.9983 32.9709 34.2999 33.0007 34.574 33.1142C34.8481 33.2277 35.0824 33.42 35.2472 33.6666C35.412 33.9133 35.5 34.2033 35.5 34.5C35.5 34.8978 35.342 35.2794 35.0607 35.5607C34.7794 35.842 34.3978 36 34 36ZM44 27H40V24C40 22.4087 39.3679 20.8826 38.2426 19.7574C37.1174 18.6321 35.5913 18 34 18C32.4087 18 30.8826 18.6321 29.7574 19.7574C28.6321 20.8826 28 22.4087 28 24V27H24C23.4696 27 22.9609 27.2107 22.5858 27.5858C22.2107 27.9609 22 28.4696 22 29V43C22 43.5304 22.2107 44.0391 22.5858 44.4142C22.9609 44.7893 23.4696 45 24 45H44C44.5304 45 45.0391 44.7893 45.4142 44.4142C45.7893 44.0391 46 43.5304 46 43V29C46 28.4696 45.7893 27.9609 45.4142 27.5858C45.0391 27.2107 44.5304 27 44 27ZM30 24C30 22.9391 30.4214 21.9217 31.1716 21.1716C31.9217 20.4214 32.9391 20 34 20C35.0609 20 36.0783 20.4214 36.8284 21.1716C37.5786 21.9217 38 22.9391 38 24V27H30V24ZM44 43H24V29H44V43Z"
        fill="white"
      />
    </svg>
  );
};
