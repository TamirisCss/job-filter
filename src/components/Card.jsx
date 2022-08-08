import React from "react";

import "./Card.css";

const Card = ({
  id,
  featured,
  logo,
  company,
  newJob,
  position,
  posted,
  contract,
  location,
  languages,
}) => {
  return (
    <div className={`cardContainer ${featured && "border"}`} key={id}>
      <div className="imgContainer">
        <img src={logo} alt={company} />
      </div>

      <div className="companyNameBox">
        <div className="companyName">
          <h4>{company}</h4>
          {newJob && <div>NEW!</div>}
          {featured && <div className="feat">FEATURED</div>}
        </div>
        <h3>{position}</h3>
        <div className="JobInfos">
          <span>{posted}</span>
          <div className="dot"></div>
          <span>{contract}</span>
          <div className="dot"></div>
          <span>{location}</span>
        </div>
      </div>
      <div className="Languages">
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
