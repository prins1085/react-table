import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Global Search : {" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} className="border border-1 m-2" />
    </span>
  );
};
