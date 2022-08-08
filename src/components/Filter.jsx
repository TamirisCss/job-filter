import React from "react";
import "./Filter.css";
import removeIcon from "../icons/icon-remove.svg";

const Filter = ({ filter }) => {
  return (
    <div className="Languages filterContainer">
      <ul>
        {filter.map((item, index) => (
          <div className="filterBox">
            <li className="filterList" key={index}>
              {item}
            </li>
            <div className="iconBox">
              <img className="removeIcon" src={removeIcon} alt="close" />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
