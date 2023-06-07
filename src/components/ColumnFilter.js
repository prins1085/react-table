import React from "react";

export const ColumnFilter = ({ column }) => {

    const {filterValue, setFilter} = column
  return (
    <span>
      Search : {""}
      <input value={filterValue || ""} onChange={(e) => setFilter(e.target.value)} className="border border-black text-black pl-1 font-extralight outline-none" />
    </span>
  );
};
