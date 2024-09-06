import React from "react";

interface EnterprisesProps {
  stroke?: string;
  addClass?: string;
}

export const Enterprises: React.FC<EnterprisesProps> = ({
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
        d="M48 43H47V26C47 25.7348 46.8946 25.4804 46.7071 25.2929C46.5196 25.1054 46.2652 25 46 25H41V22C41 21.7348 40.8946 21.4804 40.7071 21.2929C40.5196 21.1054 40.2652 21 40 21H28C27.7348 21 27.4804 21.1054 27.2929 21.2929C27.1054 21.4804 27 21.7348 27 22V29H22C21.7348 29 21.4804 29.1054 21.2929 29.2929C21.1054 29.4804 21 29.7348 21 30V43H20C19.7348 43 19.4804 43.1054 19.2929 43.2929C19.1054 43.4804 19 43.7348 19 44C19 44.2652 19.1054 44.5196 19.2929 44.7071C19.4804 44.8946 19.7348 45 20 45H48C48.2652 45 48.5196 44.8946 48.7071 44.7071C48.8946 44.5196 49 44.2652 49 44C49 43.7348 48.8946 43.4804 48.7071 43.2929C48.5196 43.1054 48.2652 43 48 43ZM23 31H28C28.2652 31 28.5196 30.8946 28.7071 30.7071C28.8946 30.5196 29 30.2652 29 30V23H39V26C39 26.2652 39.1054 26.5196 39.2929 26.7071C39.4804 26.8946 39.7348 27 40 27H45V43H37V38C37 37.7348 36.8946 37.4804 36.7071 37.2929C36.5196 37.1054 36.2652 37 36 37H32C31.7348 37 31.4804 37.1054 31.2929 37.2929C31.1054 37.4804 31 37.7348 31 38V43H23V31ZM35 43H33V39H35V43ZM32 26C32 25.7348 32.1054 25.4804 32.2929 25.2929C32.4804 25.1054 32.7348 25 33 25H35C35.2652 25 35.5196 25.1054 35.7071 25.2929C35.8946 25.4804 36 25.7348 36 26C36 26.2652 35.8946 26.5196 35.7071 26.7071C35.5196 26.8946 35.2652 27 35 27H33C32.7348 27 32.4804 26.8946 32.2929 26.7071C32.1054 26.5196 32 26.2652 32 26ZM32 30C32 29.7348 32.1054 29.4804 32.2929 29.2929C32.4804 29.1054 32.7348 29 33 29H35C35.2652 29 35.5196 29.1054 35.7071 29.2929C35.8946 29.4804 36 29.7348 36 30C36 30.2652 35.8946 30.5196 35.7071 30.7071C35.5196 30.8946 35.2652 31 35 31H33C32.7348 31 32.4804 30.8946 32.2929 30.7071C32.1054 30.5196 32 30.2652 32 30ZM39 30C39 29.7348 39.1054 29.4804 39.2929 29.2929C39.4804 29.1054 39.7348 29 40 29H42C42.2652 29 42.5196 29.1054 42.7071 29.2929C42.8946 29.4804 43 29.7348 43 30C43 30.2652 42.8946 30.5196 42.7071 30.7071C42.5196 30.8946 42.2652 31 42 31H40C39.7348 31 39.4804 30.8946 39.2929 30.7071C39.1054 30.5196 39 30.2652 39 30ZM29 34C29 34.2652 28.8946 34.5196 28.7071 34.7071C28.5196 34.8946 28.2652 35 28 35H26C25.7348 35 25.4804 34.8946 25.2929 34.7071C25.1054 34.5196 25 34.2652 25 34C25 33.7348 25.1054 33.4804 25.2929 33.2929C25.4804 33.1054 25.7348 33 26 33H28C28.2652 33 28.5196 33.1054 28.7071 33.2929C28.8946 33.4804 29 33.7348 29 34ZM29 38C29 38.2652 28.8946 38.5196 28.7071 38.7071C28.5196 38.8946 28.2652 39 28 39H26C25.7348 39 25.4804 38.8946 25.2929 38.7071C25.1054 38.5196 25 38.2652 25 38C25 37.7348 25.1054 37.4804 25.2929 37.2929C25.4804 37.1054 25.7348 37 26 37H28C28.2652 37 28.5196 37.1054 28.7071 37.2929C28.8946 37.4804 29 37.7348 29 38ZM32 34C32 33.7348 32.1054 33.4804 32.2929 33.2929C32.4804 33.1054 32.7348 33 33 33H35C35.2652 33 35.5196 33.1054 35.7071 33.2929C35.8946 33.4804 36 33.7348 36 34C36 34.2652 35.8946 34.5196 35.7071 34.7071C35.5196 34.8946 35.2652 35 35 35H33C32.7348 35 32.4804 34.8946 32.2929 34.7071C32.1054 34.5196 32 34.2652 32 34ZM39 34C39 33.7348 39.1054 33.4804 39.2929 33.2929C39.4804 33.1054 39.7348 33 40 33H42C42.2652 33 42.5196 33.1054 42.7071 33.2929C42.8946 33.4804 43 33.7348 43 34C43 34.2652 42.8946 34.5196 42.7071 34.7071C42.5196 34.8946 42.2652 35 42 35H40C39.7348 35 39.4804 34.8946 39.2929 34.7071C39.1054 34.5196 39 34.2652 39 34ZM39 38C39 37.7348 39.1054 37.4804 39.2929 37.2929C39.4804 37.1054 39.7348 37 40 37H42C42.2652 37 42.5196 37.1054 42.7071 37.2929C42.8946 37.4804 43 37.7348 43 38C43 38.2652 42.8946 38.5196 42.7071 38.7071C42.5196 38.8946 42.2652 39 42 39H40C39.7348 39 39.4804 38.8946 39.2929 38.7071C39.1054 38.5196 39 38.2652 39 38Z"
        fill="white"
      />
    </svg>
  );
};
