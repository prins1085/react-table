import React, { useMemo, useState } from "react";
import { APICOLUMNS } from "./columns";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
} from "react-table";
import "./table.css";
import { useQuery } from "@apollo/client";
import { All_Users } from "./Queries";
import { GlobalFilter } from "./GlobalFilter";

const GraphqlTable = () => {
  const { data } = useQuery(All_Users);
  const columns = useMemo(() => APICOLUMNS, []);
  const tableData = useMemo(() => data?.users?.data || [], [data]);

  const [editRow, setEditRow] = useState(null);
  const [editColumn, setEditColumn] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [rowId, setRowId] = useState("");
  const [isEditable, setIsEditable] = useState(false);

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

  const editHandler = (value, { row, column }) => {
    setInputValue(value);
    setEditRow(row.index);
    setEditColumn(column.id);
  };

  const editButtonHandler = (id) => {
    setRowId(id);
    setIsEditable(true);
  };
  const saveButtonHandler = (row) => {
    console.log(row);
    setIsEditable(false);
  };
  const cancelButtonHandler = () => {
    setIsEditable(false);
  };

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
              <th>Action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    onClick={() => editHandler(cell.value, cell)}
                  >
                    {editRow === row.index &&
                    editColumn === cell.column.id &&
                    editRow == rowId &&
                    isEditable ? (
                      <input value={inputValue} className="border border-black" onChange={e => setInputValue(e.target.value)}/>
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
                <td>
                  {!isEditable && (
                    <button
                      onClick={() => editButtonHandler(row.id)}
                      className="border border-black m-1 px-1"
                    >
                      Edit
                    </button>
                  )}
                  {isEditable && (
                    <button
                      onClick={() => saveButtonHandler(row.cells)}
                      className="border border-black m-1 px-1"
                    >
                      save
                    </button>
                  )}
                  {isEditable && (
                    <button
                      onClick={cancelButtonHandler}
                      className="border border-black m-1 px-1"
                    >
                      cancel
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GraphqlTable;
