import React from "react";

interface WebDevIconProps {
  stroke?: string;
  addClass?: string;
}

const GainCompAdv = ({ stroke, addClass }: WebDevIconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ stroke: `${stroke}` }}
        d="M27 5H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V22C3 22.5304 3.21071 23.0391 3.58579 23.4142C3.96086 23.7893 4.46957 24 5 24H9.92L7.21875 27.375C7.05299 27.5822 6.97633 27.8468 7.00563 28.1105C7.03493 28.3742 7.1678 28.6155 7.375 28.7812C7.5822 28.947 7.84676 29.0237 8.11049 28.9944C8.37421 28.9651 8.61549 28.8322 8.78125 28.625L12.48 24H19.52L23.2188 28.625C23.3008 28.7276 23.4023 28.813 23.5174 28.8764C23.6325 28.9398 23.7589 28.9799 23.8895 28.9944C24.0201 29.0089 24.1523 28.9975 24.2785 28.961C24.4046 28.9244 24.5224 28.8633 24.625 28.7812C24.7276 28.6992 24.813 28.5977 24.8764 28.4826C24.9398 28.3675 24.9799 28.2411 24.9944 28.1105C25.0089 27.9799 24.9975 27.8477 24.961 27.7215C24.9244 27.5954 24.8633 27.4776 24.7812 27.375L22.08 24H27C27.5304 24 28.0391 23.7893 28.4142 23.4142C28.7893 23.0391 29 22.5304 29 22V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM27 22H5V7H27V22ZM13 15V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V15C11 14.7348 11.1054 14.4804 11.2929 14.2929C11.4804 14.1054 11.7348 14 12 14C12.2652 14 12.5196 14.1054 12.7071 14.2929C12.8946 14.4804 13 14.7348 13 15ZM17 13V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18V13C15 12.7348 15.1054 12.4804 15.2929 12.2929C15.4804 12.1054 15.7348 12 16 12C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13ZM21 11V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19C19.7348 19 19.4804 18.8946 19.2929 18.7071C19.1054 18.5196 19 18.2652 19 18V11C19 10.7348 19.1054 10.4804 19.2929 10.2929C19.4804 10.1054 19.7348 10 20 10C20.2652 10 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11Z"
        fill="white"
      />
    </svg>
  );
};
export default GainCompAdv;
