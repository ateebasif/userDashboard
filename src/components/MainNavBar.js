import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import OrdersInfo from "./ordersInfo/index";
import ScaleGraph from "./ScalesGraph/index";
import ProductCategory from "./ProductCategoryGraph/index";
import RecentOrders from "./RecentOrders/index";
import { Box, Card, Grid } from "@material-ui/core";
import WindowSize from "../services/WindowSize";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: "4.7em",

    borderRadius: "5px 20px 5px 5px",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logoutBtn: {
    background: "#7cdbaf",
    color: "white",
    width: "80%",
    marginTop: "1rem",
  },
  dashboardText: {
    background: "#7cdbaf",
    color: "white",
    // marginTop: "-4rem",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    textAlign: "center",
    // display: "felx",
    // flexDirection: "row",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const [height, width] = WindowSize();

  console.log("height", height);
  console.log("width", width);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <div className={classes.dashboardText}>
            <h2>Dashboard</h2>
          </div>
          <List>
            <ListItem button key={"profile"}>
              <ListItemIcon>{<PersonOutlineIcon />}</ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
            <Divider />
            <ListItem button key={"Orders"}>
              <ListItemIcon>{<PersonOutlineIcon />}</ListItemIcon>
              <ListItemText primary={"Orders"} />
            </ListItem>
            <Divider />

            <ListItem button key={"Create Order"}>
              <ListItemIcon>{<AddIcon />}</ListItemIcon>
              <ListItemText primary={"Create Order"} />
            </ListItem>
          </List>
          <Divider />
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <Button
              // fullWidth
              variant="contained"
              //   style={{ background: "#7cdbaf", color: "white" }}
              className={classes.logoutBtn}
              startIcon={<ExitToAppIcon />}
            >
              Logout
            </Button>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <OrdersInfo />
          </Grid>
          <Grid item xs={12} sm={12} md={4} style={{ marginTop: "1rem" }}>
            <ScaleGraph />
            <Box style={{ marginTop: "1rem" }}>
              <ScaleGraph />
            </Box>
          </Grid>
          <Box style={{ marginLeft: "3rem", marginTop: "1rem" }}>
            <Grid item xs={12} sm={12} md={5}>
              <ProductCategory />
            </Grid>
          </Box>
          {width <= 774 && <Grid item sm={12} md={2}></Grid>}
          <Box style={{ marginTop: "1rem" }}>
            <Grid item xs={12} sm={12} md={4}>
              <RecentOrders />
            </Grid>
          </Box>
        </Grid>
      </main>
    </div>
  );
}
