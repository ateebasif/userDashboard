import React from "react";
import { Line } from "react-chartjs-2";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    justifyContent: "space-between",
    height: "18vw",
    width: "30vw",
    maxWidth: "50vw",
    [theme.breakpoints.down("md")]: {
      // width: "30vw",
      maxWidth: 900,
      width: 420,
      height: 300,
    },
    borderRadius: 10,
  },
  graphBox: {
    position: "relative",
    height: "20vh",
    width: "28vw",
    [theme.breakpoints.down("md")]: {
      // width: "30vw",
      maxWidth: 900,
      width: 400,
      height: 200,
    },
  },
}));

export default function ScaleGraph({ scaleGraphWidth }) {
  const classes = useStyles();

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,

        lineTension: 0,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#6adda7",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        borderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  };
  const v = 420;
  return (
    <div>
      <Card className={classes.root} style={scaleGraphWidth}>
        <Box>
          <h3>Scales</h3>
          <p style={{ marginTop: "-14px" }}>Scales</p>
        </Box>
        <Box
          // style={{ position: "relative", height: "20vh", width: "28vw" }}
          className={classes.graphBox}
        >
          <Line
            data={data}
            // width={100}
            // height={50}
            //   options={{ maintainAspectRatio: false }}
            options={options}
          />
        </Box>
      </Card>
    </div>
  );
}
