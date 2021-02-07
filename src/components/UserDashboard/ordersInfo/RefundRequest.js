import React from "react";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "14vw",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
      marginBottom: "10px",
      width: "30vw",
      height: "30vw",
      marginLeft: "-12px",
    },
  },

  headingText: {
    display: "flex",
  },
}));

const RefundRequest = () => {
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
              background: "#ffdbdb",
              borderRadius: 50,
              height: 80,
              width: 80,
              textAlign: "center",
            }}
          >
            <InboxIcon
              style={{ color: "#df1b1b", fontSize: 50, marginTop: 16 }}
            />
          </Box>
          <p>Refund Requests</p>
          <Typography
            variant="h3"
            color="textPrimary"
            style={{ marginTop: -10 }}
          >
            02
          </Typography>
        </Box>
        {/* Body Box end */}
      </Card>
    </div>
  );
};

export default RefundRequest;
