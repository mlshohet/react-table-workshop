import { format } from 'date-fns';
import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy')},
    Filter: ColumnFilter
  },
  {
    Header: "Country",
    accessor: "country",
    Filter: ColumnFilter
  },
  {
    Header: "Phone",
    accessor: "phone",
    Filter: ColumnFilter
  },
];

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
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
  },
];