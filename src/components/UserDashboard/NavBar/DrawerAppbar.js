import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
// import "./Drawer.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";

import OrdersInfo from "../ordersInfo/index";
import ScaleGraph from "../ScalesGraph/index";
import ProductCategory from "../ProductCategoryGraph/index";
import RecentOrders from "../RecentOrders/index";
import { Box, Card, Grid } from "@material-ui/core";
import WindowSize from "../../../services/WindowSize";
// import Navbar from "../../Navbar";
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Switch from "./Switch";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    borderRadius: 20,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    border: "1px solid #e3e3e3",
    borderRadius: 30,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    marginRight: "30px",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  darkModeDiv: {
    borderRadius: 30,
    border: "1px solid #e3e3e3",
    // padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    display: "flex",
    height: 40,
    marginTop: "6px",
    marginRight: "10px",
  },
  profileDetails: {
    display: "flex",
  },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    paddingLeft: "15rem",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    marginTop: "4rem",

    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    borderRadius: "5px 20px 5px 5px",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: "-1rem",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  logoutBtn: {
    background: "#7cdbaf",
    color: "white",
    width: "80%",
    marginTop: "1rem",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    background: "#7cdbaf",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [height, width] = WindowSize();

  const [scaleGraphWidth, setScaleGraphWidth] = useState({
    width: "100%",
  });
  const [productCategoryWidth, setProductCategoryWidth] = useState(
    width <= 744
      ? { width: "76vh" }
      : {
          width: "23vw",
          marginLeft: "-2rem",
          marginRight: "1rem",
        }
  );

  // const [recentOrdersWidth, setRecentOrdersWidth] = useState({ width: "27vw" });
  const [recentOrdersWidth, setRecentOrdersWidth] = useState({ width: "27vw" });

  console.log("height", height);
  console.log("width", width);

  useEffect(() => {
    const recentWidh = () => {
      if (width <= 727) {
        // setRecentOrdersWidth({ width: 570 });
        setRecentOrdersWidth({ width: 970 });
        console.log("worked");
        // alert("recent");
      }
    };
    return recentWidh;
  }, [width]);

  useEffect(() => {
    const recentWidh = () => {
      if (width > 723) {
        setRecentOrdersWidth({ width: "27vw" });
      }
    };
    return recentWidh;
  }, [width]);

  const handleDrawerOpen = () => {
    setOpen(true);
    setScaleGraphWidth({ width: "" });
    // setRecentOrdersWidth({ width: "" });
    if (width <= 744) {
      setProductCategoryWidth({ width: "58vw" });
      setRecentOrdersWidth({ width: "58vw" });
    } else {
      setRecentOrdersWidth({ width: "27vw" });

      setProductCategoryWidth({
        width: "20vw",
      });
    }
  };

  useEffect(() => {
    const changeWidth = () => {
      if (width <= 744) {
        setProductCategoryWidth({ width: "76vh" });
        console.log("still useeffect worked");
      }
      if (width >= 744) {
        setProductCategoryWidth({
          width: "20vw !important",
          //   marginLeft: "-2rem",
          //   marginRight: "1rem",
        });
      }
      console.log("useeffect worked");
    };
    return changeWidth;
  }, [width]);

  useEffect(() => {
    if (open === true && width <= 744) {
      setProductCategoryWidth({ width: "56vh" });
    }
  }, [width]);

  useEffect(() => {
    if (width >= 744) {
      setProductCategoryWidth({
        width: "23vw",
        marginLeft: "-2rem",
        marginRight: "1rem",
      });
    }
  }, [width]);

  const handleDrawerClose = () => {
    setOpen(false);
    setScaleGraphWidth({
      width: "100%",
    });

    if (width <= 744) {
      // setProductCategoryWidth({ width: "58vw" });
      setRecentOrdersWidth({ width: "78vw" });
    }

    // setRecentOrdersWidth(width <= 744 ? { width: 420 } : { width: 420 });
    // setRecentOrdersWidth({ width: 420 });

    setProductCategoryWidth(
      width <= 744
        ? { width: "76vh" }
        : {
            width: "23vw",
            marginLeft: "-2rem",
            marginRight: "1rem",
          }
    );
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "white", color: "black", zIndex: 1251 }}
        position="fixed"
        // style={{ zIndex: 1251 }}
        // position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/*   Mini variant drawer*/}
          </Typography>
          {/* search */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* search */}

          {/* Title */}
          <div className={classes.title}>
            <h2>STORE.</h2>
            <h2 style={{ color: "#64b996" }}>LOCATOR</h2>
          </div>
          {/* Title */}

          {/* right side */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.darkModeDiv}>
              <div style={{ margingBottom: 5 }}>
                <p style={{ marginTop: "10px" }}>Dark Mode</p>
              </div>
              <div style={{ paddingTop: 12, marginLeft: "10px" }}>
                <Switch />
              </div>
            </div>
            <p>|</p>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>|</p>
            <div className={classes.profileDetails}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              >
                <Typography variant="h7">Sarah</Typography>
                <Typography style={{ fontSize: 12 }}>Lorem ipsum</Typography>
              </div>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {/* right side */}
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ marginTop: "4rem" }}
        style={{ zIndex: 1250 }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <DashboardIcon style={{ marginRight: "2rem" }} />
          <p style={{ marginRight: "2.5rem" }}>Dashboard</p>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Dashboard"}>
            <ListItemIcon>
              <DashboardIcon />
              <ListItemText
                style={{ marginLeft: "2rem" }}
                primary={"Dashboard"}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"Profile"}>
            <ListItemIcon>
              <PersonOutlineIcon />
              <ListItemText
                style={{ marginLeft: "2rem" }}
                primary={"Profile"}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"Orders"}>
            <ListItemIcon>
              <PersonOutlineIcon />
              <ListItemText style={{ marginLeft: "2rem" }} primary={"Orders"} />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"CreateOrders"}>
            <ListItemIcon>
              <AddIcon />
              <ListItemText
                style={{ marginLeft: "2rem" }}
                primary={"Create Orders"}
              />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <div style={{ justifyContent: "center", textAlign: "center" }}>
          <List>
            <ListItem button key={"logout"}>
              <ListItemIcon>
                <ExitToAppIcon />
                <ListItemText style={{ marginLeft: "2rem", marginTop: "-2px" }}>
                  <Button
                    // fullWidth
                    variant="contained"
                    style={{ background: "#7cdbaf", color: "white" }}
                    // className={classes.logoutBtn}
                    startIcon={<ExitToAppIcon />}
                  >
                    Logout
                  </Button>
                </ListItemText>
              </ListItemIcon>
            </ListItem>
          </List>
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
      </Drawer>
      <main className={classes.content}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <OrdersInfo />
          </Grid>
          <Grid item xs={9} sm={9} md={4} style={{ marginTop: "1rem" }}>
            <ScaleGraph scaleGraphWidth={scaleGraphWidth} />
            <Box style={{ marginTop: "1rem" }}>
              <ScaleGraph scaleGraphWidth={scaleGraphWidth} />
            </Box>
          </Grid>

          <Box style={{ marginLeft: "3rem", marginTop: "1rem" }}>
            <Grid item xs={12} sm={12} md={5}>
              <ProductCategory productCategoryWidth={productCategoryWidth} />
            </Grid>
          </Box>
          {width <= 774 && <Grid item sm={12} md={2}></Grid>}
          <Box style={{ marginTop: "1rem" }}>
            <Grid item xs={12} sm={12} md={4}>
              <RecentOrders recentOrdersWidth={recentOrdersWidth} />
            </Grid>
          </Box>
        </Grid>
      </main>
    </div>
  );
}
