import React from "react";
import { useEffect, useState } from "react";
import Languages from "./Languages";
import JobInfo from "./JobInfo";

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
        <div>
          {jobInfo.map((item) => (
            <div key={item.id}>
              <img src={item.logo} alt={item.company} />
              <div>
                <div>
                  <h4>{item.company}</h4>
                  {item.new && <button>NEW!</button>}
                  {item.featured && <button>FEATURED</button>}
                </div>
                <h4>{item.position}</h4>
                <JobInfo
                  posted={item.postedAt}
                  contract={item.contract}
                  location={item.location}
                />
                <Languages languages={item.languages} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
