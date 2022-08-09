import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";

const App = () => {
  const [jobInfo, setJobInfo] = useState();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../data.json");
      const data = await res.json();
      console.log(data);
      setJobInfo(data);
    };
    fetchData();
  }, []);

  const addToFilter = (e) => {
    //check if item alredy exist
    if (filter.includes(e.target.innerHTML)) {
      return false;
    }
    setFilter([...filter, e.target.innerHTML]);
  };

  const removeFilter = (e) => {
    filter.splice(filter.indexOf(e.target.id), 1);
    console.log(filter)
    setFilter([...filter]);
  };

  const filterSearch = (job) => {
    if (filter.length === 0) {
      return true;
    }

    return filter.every((item) => job.languages.includes(item));
  };

  return (
    <div>
      <Header />
      <Filter filter={filter} removeFilter={removeFilter} />

      {jobInfo && (
        <div className="container">
          {jobInfo.filter(filterSearch).map((job) => (
            <div key={job.id}>
              <Card addToFilter={addToFilter} job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
