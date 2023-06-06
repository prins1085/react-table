import React, { useMemo } from "react";
import { APICOLUMNS } from "./columns";
import { useFilters, useGlobalFilter, usePagination, useTable } from "react-table";
import "./table.css";
import { useQuery } from "@apollo/client";
import { All_Users } from "./Queries";
import { GlobalFilter } from "./GlobalFilter";

const GraphqlTable = () => {
  const { data } = useQuery(All_Users);
  const columns = useMemo(() => APICOLUMNS, []);
  const tableData = useMemo(() => data?.users?.data || [], [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
   
  } = useTable({ columns, data: tableData }, useGlobalFilter, useFilters);

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
     
    </>
  );
};

export default GraphqlTable;
