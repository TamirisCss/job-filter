import React from "react";
import "./Filter.css";
import removeIcon from "../icons/icon-remove.svg";

const Filter = ({ filter, removeFilter }) => {
  return (
    <div className={`Languages ${filter.length > 0 && "filterContainer"}`}>
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
      <span className={`clearBtnHide ${filter.length > 0 && "clearBtnShow"}`}>
        clear
      </span>
    </div>
  );
};

export default Filter;
