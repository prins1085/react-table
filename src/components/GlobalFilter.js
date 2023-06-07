import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Global Search : {" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} className="border border-black m-2 pl-1 outline-none" />
    </span>
  );
};
