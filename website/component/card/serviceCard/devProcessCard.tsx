"use client";
import React, { useState } from "react";
import { DevProcessData } from "../../../userdata/DevProcessData";

interface DevProcessCardProps {
  data: DevProcessData;
}

const DevProcessCard: React.FC<DevProcessCardProps> = ({ data }) => {
  const [readmore, SetReadmore] = useState(true);
  return (
    <div className="dev card">
      <div
        className="dev card-header"
        style={{ backgroundColor: data.headerColor }}
      >
        <h3>{data.header}</h3>
      </div>
      <div className="dev card-body">
        {data.body.length < 300 ? (
          <p>{data.body}</p>
        ) : (
          <>
            <p className={`${readmore ? "line-clamp-6" : ""}`}>{data.body}</p>
            <button
              onClick={() => SetReadmore((prev) => !prev)}
              className="mt-2 text-primaryHeading font-bold"
            >
              Read {readmore ? "more" : "less"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DevProcessCard;
