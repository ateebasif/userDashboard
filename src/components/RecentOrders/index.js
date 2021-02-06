import React from "react";
import OrdersList from "./OrdersList";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "30vw",
    width: "27vw",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      // width: "30vw",
      maxWidth: 900,
      width: 420,
      height: 500,
      marginLeft: "-1rem",
    },
  },
  heading: {
    paddingLeft: theme.spacing(2),
  },
}));

export default function RecentOrders() {
  const classes = useStyles();

  const orders = [
    { img: "", heading: "", description: "", date: "" },
    { img: "", heading: "", description: "", date: "" },
    { img: "", heading: "", description: "", date: "" },
    { img: "", heading: "", description: "", date: "" },
  ];

  return (
    <div style={{ marginLeft: "1rem" }}>
      <Card className={classes.root}>
        <Box className={classes.heading}>
          <h3>Recent Orders</h3>
        </Box>

        <Box>
          {orders.map((order) => (
            <OrdersList />
          ))}
        </Box>
      </Card>
    </div>
  );
}
