import React from "react";
import { useEffect, useState } from "react";
import Languages from "./Languages";
import JobInfo from "./JobInfo";

import "./Card.css";

const Card = () => {
  const [jobInfo, setJobInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../data.json");
      const data = await res.json();
      console.log(data);
      setJobInfo(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {jobInfo && (
        <div className="container">
          {jobInfo.map((item) => (
            <div className="cardContainer" key={item.id}>
              <div className="imgContainer">
                <img src={item.logo} alt={item.company} />
              </div>

              <div className="companyNameBox">
                <div className="companyName">
                  <h4>{item.company}</h4>
                  {item.new && <div>NEW!</div>}
                  {item.featured && <div className="feat">FEATURED</div>}
                </div>
                <h3>{item.position}</h3>
                <JobInfo
                  posted={item.postedAt}
                  contract={item.contract}
                  location={item.location}
                />
              </div>
              <Languages languages={item.languages} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
