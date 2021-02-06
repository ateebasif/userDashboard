import React from "react";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "14vw",
    borderRadius: 10,
  },

  headingText: {
    display: "flex",
  },
}));

const CompletedOrders = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        {/* Heading Box */}
        <Box flexGrow={1}>
          <Typography
            component="h3"
            gutterBottom
            variant="overline"
            color="textSecondary"
            className={classes.headingText}
          ></Typography>
        </Box>
        {/* Heading Box end */}

        {/* Body Box */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            style={{
              background: "#dbfff2",
              borderRadius: 50,
              height: 80,
              width: 80,
              textAlign: "center",
            }}
          >
            <DoneIcon
              style={{ color: "#76c6a0", fontSize: 50, marginTop: 16 }}
            />
          </Box>
          <p>Completed Orders</p>
          <Typography
            variant="h3"
            color="textPrimary"
            style={{ marginTop: -10 }}
          >
            10
          </Typography>
        </Box>
        {/* Body Box end */}
      </Card>
    </div>
  );
};

export default CompletedOrders;
