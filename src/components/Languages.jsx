import React from "react";
import "./Languages.css";

const Languages = ({ languages }) => {
  return (
    <div className="Languages">
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
