import React from "react";
import { useState } from "react";

const Filter = ({ jobInfo }) => {
  const [search, setSearch] = useState("");

  return <div>
    <input 
    name="search"
    type="text"
    placeholder="Type Language"
    onChange={e => setSearch(e.target.value)}
    value={search} />
  </div>;
};

export default Filter;
