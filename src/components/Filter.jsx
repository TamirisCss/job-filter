import React from "react";
import "./Filter.css";

const Filter = ({ filter }) => {
  return (
    <div className="Languages filterContainer">
      <ul>
        {filter.map((item, index) => (
          <li className="filterList" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
