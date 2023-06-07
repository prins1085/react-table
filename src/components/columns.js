import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const APICOLUMNS = [
  {
    Header: "Info",
    Footer: "Info", 
    columns: [
      {
        Header: "Id",
        Footer: "Id",
        accessor: "id",
        Filter: ColumnFilter,
        disableFilters: true,
        sticky: "left",
      },
      {
        Header: "Name",
        Footer: "Name",
        accessor: "name",
        Filter: ColumnFilter,
        sticky: "left",
      },
      {
        Header: "Username",
        Footer: "Username",
        accessor: "username",
        Filter: ColumnFilter,
        sticky: "left",
      },
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        disableFilters: true,
        Filter: ColumnFilter,
      },
      {
        Header: "Website",
        Footer: "Website",
        accessor: "website",
        disableFilters: true,
        Filter: ColumnFilter,
      },
    ]
  },
  
  // {
  //   Header: "Address",
  //   Footer: "Address",
  //   columns: [
  //     {
  //       Header: "Street",
  //       accessor: "address.street",
  //       Filter: ColumnFilter,
  //       disableFilters: true,
  //     },
  //     {
  //       Header: "Suite",
  //       accessor: "address.suite",
  //       Filter: ColumnFilter,
  //       disableFilters: true,
  //     },
  //     {
  //       Header: "City",
  //       accessor: "address.city",
  //       Filter: ColumnFilter,
  //       disableFilters: true,
  //     },
  //     {
  //       Header: "Zipcode",
  //       accessor: "address.zipcode",
  //       Filter: ColumnFilter,
  //       disableFilters: true,
  //     },
  //   ],
  // },
];

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
    sticky: "left",

  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
    sticky: "left",
    
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
    sticky: "left",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    disableFilters: true,
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    disableFilters: true,
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  // {
  //   Header: "Age",
  //   Footer: "Age",
  //   accessor: "age",
  //   disableFilters: true,
  //   Filter: ColumnFilter,
  // },
];

//group columns
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
