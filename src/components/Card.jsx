import React from "react";

import "./Card.css";

const Card = ({ job, addToFilter }) => {
  return (
    <div className={`cardContainer ${job.featured && "border"}`} key={job.id}>
      <div className="imgContainer">
        <img src={job.logo} alt={job.company} />
      </div>

      <div className="companyNameBox">
        <div className="companyName">
          <h4>{job.company}</h4>
          {job.new && <div>NEW!</div>}
          {job.featured && <div className="feat">FEATURED</div>}
        </div>
        <h3>{job.position}</h3>
        <div className="JobInfos">
          <span>{job.posted}</span>
          <div className="dot"></div>
          <span>{job.contract}</span>
          <div className="dot"></div>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="Languages">
        <ul>
          {job.languages.map((lang, index) => (
            <li className="cardList" onClick={addToFilter} key={index}>
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
