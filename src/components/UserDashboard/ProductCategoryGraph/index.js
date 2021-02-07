import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "25vw",
    // width: "20vw",
    maxWidth: "40vw",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      // width: "76vw",
      maxWidth: 900,
      // width: 620,
      height: 300,
      marginLeft: "-4rem",
    },
  },
  heading: {
    paddingLeft: theme.spacing(2),
  },

  graphBox: {
    position: "relative",
    height: "20vh",
    width: "28vw",
    marginLeft: "-60px",

    [theme.breakpoints.down("md")]: {
      // width: "30vw",
      maxWidth: 900,
      width: 500,
      height: 200,
    },
  },
}));

export default function ProductCategory({ productCategoryWidth }) {
  const classes = useStyles();

  const data = {
    labels: ["Sales", "Orders", "Stock"],
    datasets: [
      {
        label: "Rainfall",
        borderColor: ["#76b732", "#5fcc83", "#bcc9b4", "#e6ebe2"],
        backgroundColor: ["#d8e5cb", "#d9f0e1", "#f6f8f5"],
        // hoverBackgroundColor: ["#d8e5cb", "#4B5000", "#175000"],
        usePointStyle: "circle",
        data: [65, 59, 70],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "black",
        usePointStyle: true,
      },
    },
  };

  return (
    <div style={{ marginLeft: "1rem" }}>
      <Card className={classes.root} style={productCategoryWidth}>
        <Box className={classes.heading}>
          <h3>Product Categories</h3>
        </Box>
        <Box
          className={classes.graphBox}
          // style={{
          //   position: "relative",
          //   height: "20vh",
          //   width: "28vw",
          //   marginLeft: "-60px",
          // }}
        >
          <Pie
            data={data}
            width={100}
            height={50}
            options={options}
            // options={{ maintainAspectRatio: false }}
          />
        </Box>
      </Card>
    </div>
  );
}
