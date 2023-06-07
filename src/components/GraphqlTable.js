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
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const GraphqlTable = () => {
  const { data } = useQuery(All_Users);
  // const columns = useMemo(() => APICOLUMNS, []);
  // const tableData = useMemo(() => data?.users?.data || [], [data]);
  const columns = useMemo(() => COLUMNS, []);
  const tableData = useMemo(() => MOCK_DATA, []);

  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    country: "",
  });

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
  const saveButtonHandler = () => {
    setIsEditable(false);
  };
  const cancelButtonHandler = () => {
    setIsEditable(false);
  };

  const updateValue = (e) => {
    setInputValue(e.target.value);
    const fieldName = e.target.name;
    console.log(fieldName);
    setInput((existingValue) => ({
      ...existingValue,
      [fieldName]: e.target.value,
    }));
  };

  console.log(input);

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
                    editRow === +rowId &&
                    isEditable ? (
                      <input
                        name={cell.column.id}
                        value={inputValue}
                        className="border border-black"
                        onChange={updateValue}
                      />
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
                <td>
                  {!isEditable && (
                    <button onClick={() => editButtonHandler(row.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  )}
                  {isEditable && (
                    <button onClick={() => saveButtonHandler()} className="m-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </button>
                  )}
                  {isEditable && (
                    <button onClick={cancelButtonHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                      </svg>
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
