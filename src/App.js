// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import OrdersInfo from "./components/ordersInfo/index";
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
    <div className="App">
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
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
          <h1>something</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
