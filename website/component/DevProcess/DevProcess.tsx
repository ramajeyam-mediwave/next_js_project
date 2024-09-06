import React from "react";

interface TimelineProps {
  processData: any[];
}

const HorizontalTimeline: React.FC<TimelineProps> = ({ processData }) => {
  return (
    <div className="flex flex-nowrap overflow-x-scroll">
      <div className="grid mx-auto md:flex gap-4 items-center justify-center">
        {processData.map((process, index) => (
          <React.Fragment key={index}>
            <div
              className={`timeline-item p-4`}
              style={{ backgroundColor: process.headerColor }}
            >
              {process.header}
            </div>
            {index < processData.length - 1 && (
              <div className="timeline-arrow text-4xl mx-2">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
