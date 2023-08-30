import React from "react";
import "./Filter.css";
import removeIcon from "../icons/icon-remove.svg";

const Filter = ({ filter, removeFilter, clearAllFilter }) => {
  return (
    <>
      {
        filter.length === 0 ? (
          <h2 className="noFilterMsg">
            Any filter was applied, select any language to apply the filter.
          </h2>
        ) : (
        <div className={`Languages ${filter.length > 0 && "filterContainer"}`}>
          <ul className="ulList">
            {filter.map((item, index) => (
              <div className="filterBox" key={index}>
                <li className="filterList">{item}</li>
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
          <span
            onClick={clearAllFilter}
            className={`clearBtnHide ${filter.length > 0 && "clearBtnShow"}`}
          >
            clear
          </span>
        </div>
        )
      }
    </>
  );
};

export default Filter;
