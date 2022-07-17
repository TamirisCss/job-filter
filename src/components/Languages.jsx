import React from "react";

const Languages = ({ languages }) => {
  return (
    <div>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
