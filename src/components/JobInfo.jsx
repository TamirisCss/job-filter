import React from "react";

const JobInfo = ({ posted, contract, location }) => {
  return (
    <div>
      <div>
        <span>{posted}</span>
        <span>{contract}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default JobInfo;
