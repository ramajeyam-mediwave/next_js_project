import React from "react";

interface PerformanceAnalysisProps {
  stroke?: string;
  addClass?: string;
}

export const PerformanceAnalysis: React.FC<PerformanceAnalysisProps> = ({
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
        d="M46 42H45V22C45 21.7348 44.8946 21.4804 44.7071 21.2929C44.5196 21.1054 44.2652 21 44 21H37C36.7348 21 36.4804 21.1054 36.2929 21.2929C36.1054 21.4804 36 21.7348 36 22V27H30C29.7348 27 29.4804 27.1054 29.2929 27.2929C29.1054 27.4804 29 27.7348 29 28V33H24C23.7348 33 23.4804 33.1054 23.2929 33.2929C23.1054 33.4804 23 33.7348 23 34V42H22C21.7348 42 21.4804 42.1054 21.2929 42.2929C21.1054 42.4804 21 42.7348 21 43C21 43.2652 21.1054 43.5196 21.2929 43.7071C21.4804 43.8946 21.7348 44 22 44H46C46.2652 44 46.5196 43.8946 46.7071 43.7071C46.8946 43.5196 47 43.2652 47 43C47 42.7348 46.8946 42.4804 46.7071 42.2929C46.5196 42.1054 46.2652 42 46 42ZM38 23H43V42H38V23ZM31 29H36V42H31V29ZM25 35H29V42H25V35Z"
        fill="white"
      />
    </svg>
  );
};
