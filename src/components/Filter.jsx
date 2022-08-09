import React from "react";
import "./Filter.css";
import removeIcon from "../icons/icon-remove.svg";

const Filter = ({ filter, removeFilter }) => {
  return (
    <div className="Languages filterContainer">
      <ul>
        {filter.map((item, index) => (
          <div className="filterBox">
            <li className="filterList" key={index}>
              {item}
            </li>
            <div className="iconBox">
              <img
                onClick={removeFilter}
                className="removeIcon"
                src={removeIcon}
                id={item}
                alt="close"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
