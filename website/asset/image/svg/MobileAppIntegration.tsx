import React from "react";

interface MobileAppIntegrationProps {
  stroke?: string;
  addClass?: string;
}

export const MobileAppIntegration: React.FC<MobileAppIntegrationProps> = ({
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
        d="M31.667 34.1667C32.168 34.8365 32.8072 35.3908 33.5413 35.7918C34.2754 36.1929 35.0871 36.4313 35.9214 36.4911C36.7558 36.5508 37.5932 36.4305 38.3769 36.1381C39.1606 35.8458 39.8723 35.3883 40.4637 34.7967L43.9637 31.2967C45.0262 30.1965 45.6142 28.723 45.6009 27.1935C45.5876 25.6641 44.9741 24.201 43.8926 23.1194C42.8111 22.0379 41.348 21.4244 39.8185 21.4111C38.289 21.3978 36.8155 21.9858 35.7153 23.0484L33.7087 25.0434"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.3336 31.8334C35.8325 31.1636 35.1933 30.6094 34.4593 30.2083C33.7252 29.8073 32.9135 29.5688 32.0791 29.509C31.2448 29.4493 30.4074 29.5697 29.6237 29.862C28.8399 30.1544 28.1283 30.6119 27.5369 31.2034L24.0369 34.7034C22.9743 35.8036 22.3863 37.2771 22.3996 38.8066C22.4129 40.3361 23.0264 41.7992 24.108 42.8807C25.1895 43.9623 26.6526 44.5757 28.1821 44.589C29.7115 44.6023 31.1851 44.0144 32.2852 42.9518L34.2802 40.9568"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
