import React from "react";
import PendingOrders from "./PendingOrders";
import CompletedOrders from "./CompletedOrders";
import RefundRequest from "./RefundRequest";
import NewComments from "./NewComments";
import Blank from "./Blank";
import {
  Box,
  Grid,
  makeStyles,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function OrdersInfoindex() {
  const classes = useStyles();

  return (
    <div
      style={{ marginTop: "4rem", display: "flex" }}
      className={classes.mainDiv}
    >
      <Box th={2} width="15%">
        <PendingOrders />
      </Box>

      <Box th={2} width="15%" style={{ marginLeft: "12px" }}>
        <CompletedOrders />
      </Box>

      <Box th={2} width="15%" style={{ marginLeft: "12px" }}>
        <RefundRequest />
      </Box>

      <Box th={2} width="15%" style={{ marginLeft: "12px" }}>
        <NewComments />
      </Box>

      <Box th={2} width="15%" style={{ marginLeft: "12px" }}>
        <Blank />
      </Box>

      <Box th={2} width="15%" style={{ marginLeft: "12px" }}>
        <Blank />
      </Box>
    </div>
  );
}
