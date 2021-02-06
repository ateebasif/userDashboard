// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import OrdersInfo from "./components/ordersInfo/index";
import ScaleGraph from "./components/ScalesGraph/index";
import {
  Box,
  Grid,
  makeStyles,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";

function App() {
  return (
    <div className="App" style={{ background: "#efefef" }}>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12} sm={12} md={2} style={{ background: "#efefef" }}>
          <Drawer />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          style={{ marginTop: "4rem", background: "#efefef" }}
        >
          <OrdersInfo />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          style={{
            marginTop: "1rem",
            background: "#efefef",
            marginLeft: "265px",
          }}
        >
          <ScaleGraph />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
