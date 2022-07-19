import React from "react";
import "./JobInfo.css";

const JobInfo = ({ posted, contract, location }) => {
  return (
    <div className="JobInfos">
      <span>{posted}</span>
      <div className="dot"></div>
      <span>{contract}</span>
      <div className="dot"></div>
      <span>{location}</span>
    </div>
  );
};

export default JobInfo;
