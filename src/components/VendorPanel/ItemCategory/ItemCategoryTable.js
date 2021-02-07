import React from "react";
import MaterialTable from "material-table";
import ItemForm from "./ItemForm";
import { Button } from "@material-ui/core";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));
export default function Editable() {
  const { useState } = React;
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#ff9100",
      },
    },
  });

  const [columns, setColumns] = useState([
    {
      title: "Name",
      field: "name",
      cellStyle: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Email",
      field: "email",
      initialEditValue: "initial edit value",
      cellStyle: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
      },
    },
    {
      title: "Mobile",
      field: "mobile",
      type: "numeric",
      cellStyle: {
        textAlign: "center",
        // paddingRight: "4rem",
      },
      headerStyle: {
        textAlign: "center",
        // paddingRight: "-4rem",
      },
    },
    {
      title: "Vehicle",
      field: "vehicle",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      cellStyle: {
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
      },
    },
  ]);

  const [data, setData] = useState([
    {
      name: "Mehmet",
      email: "Baran@gmail.com",
      mobile: 1987,
      vehicle: 63,
    },
    {
      name: "Zerya Betül",
      email: "Baran@gmail.com",
      mobile: 2017,
      vehicle: 34,
    },
  ]);

  return (
    <MaterialTable
      title="Delivery Drivers"
      columns={columns}
      data={data}
      options={{
        actionsColumnIndex: -1,
        selection: true,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
      icons={{
        Add: (props) => <ItemForm />,
      }}
    />
  );
}
