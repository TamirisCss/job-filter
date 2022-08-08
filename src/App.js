import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";

const App = () => {
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
    <div className="App">
      <Header />
      <Filter />
      {jobInfo && (
        <div className="container">
          {jobInfo.map((item) => (
            <Card
              id={item.id}
              logo={item.logo}
              featured={item.featured}
              company={item.company}
              newJob={item.new}
              position={item.position}
              posted={item.postedAt}
              contract={item.contract}
              location={item.location}
              languages={item.languages}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
