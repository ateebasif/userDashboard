import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik } from "formik";
import AddIcon from "@material-ui/icons/Add";
import "./image.css";
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  TextField,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputTextField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
    },
  },
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <div
          style={{
            border: "1px solid #dcd1d1",
            marginRight: "10px",
            borderRadius: 10,
            padding: 5,
          }}
        >
          {" "}
          <img src={photo} alt="" key={photo} />
        </div>
      );
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"lg"}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ textAlign: "center" }} id="form-dialog-title">
          <b> Add New Item</b>
          <br />
          <p style={{ fontSize: 15 }}> Enter Product Details</p>
        </DialogTitle>
        <DialogContent>
          {/* Form*/}

          <Formik
            initialValues={{
              productName: "",
              password: "",
              submit: null,
            }}
            // validationSchema={Yup.object().shape({
            //   email: Yup.string()
            //     .email("Must be a valid email")
            //     .max(255)
            //     .required("Email is required"),
            //   password: Yup.string().max(255).required("Password is required"),
            // })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              console.log("submit pressed");
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off"
                // className={clsx(classes.root, className)}
                // {...rest}
              >
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h6">Product Name</Typography>
                    <Box style={{ marginRight: "1rem" }}>
                      <TextField
                        error={Boolean(
                          touched.productName && errors.productName
                        )}
                        fullWidth
                        helperText={touched.productName && errors.productName}
                        // label="Product Name"
                        margin="normal"
                        name="productName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.productName}
                        variant="outlined"
                        size="small"
                        placeholder="Product Name"
                        InputProps={{
                          className: classes.inputTextField,
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography
                      variant="h6"
                      style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                    >
                      Choose Category
                    </Typography>
                    <Box style={{ marginLeft: "1rem" }}>
                      <TextField
                        id="outlined-select-currency-native"
                        select
                        fullWidth
                        // label="Native select"
                        value={currency}
                        size="small"
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                        // helperText="Please select your currency"
                        variant="outlined"
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6">Price & Quantity</Typography>
                  </Grid>

                  {/* Quantity */}
                  <Grid item xs={4} sm={4} md={4}>
                    <Box style={{ marginRight: "1rem" }}>
                      <TextField
                        error={Boolean(
                          touched.productName && errors.productName
                        )}
                        fullWidth
                        helperText={touched.productName && errors.productName}
                        // label="Product Name"
                        margin="normal"
                        name="productName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.productName}
                        variant="outlined"
                        placeholder="Enter Quantity"
                        size="small"
                        InputProps={{
                          className: classes.inputTextField,
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* End Quantity */}

                  {/* Price */}
                  <Grid item xs={4} sm={4} md={4}>
                    <Box style={{ marginLeft: "1rem" }}>
                      <TextField
                        error={Boolean(
                          touched.productName && errors.productName
                        )}
                        fullWidth
                        helperText={touched.productName && errors.productName}
                        // label="Product Name"
                        margin="normal"
                        name="productName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.productName}
                        variant="outlined"
                        placeholder="Enter Price"
                        size="small"
                        InputProps={{
                          className: classes.inputTextField,
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* Price */}

                  {/* Discount */}
                  <Grid item xs={4} sm={4} md={4}>
                    <Box style={{ marginLeft: "1rem" }}>
                      <TextField
                        error={Boolean(
                          touched.productName && errors.productName
                        )}
                        fullWidth
                        size="small"
                        helperText={touched.productName && errors.productName}
                        // label="Product Name"
                        margin="normal"
                        name="productName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.productName}
                        variant="outlined"
                        placeholder="Enter Discount"
                        InputProps={{
                          className: classes.inputTextField,
                        }}
                      />
                    </Box>
                  </Grid>
                  {/* Discount */}

                  {/* Images */}

                  <Grid item xs={12} sm={12} md={12}>
                    <Typography style={{ marginTop: "10px" }} variant="h6">
                      Upload Product Image
                    </Typography>
                    <div>
                      <input
                        type="file"
                        id="file"
                        multiple
                        onChange={handleImageChange}
                      />
                      {/*    <div className="label-holder">
                        <label htmlFor="file" className="label"> */}
                      {/*  <i className="material-icons">add_a_photo</i> */}
                      {/**      <AddIcon
                            style={{
                              width: "100",
                              height: "100px",
                              border: "1px solid #dcd1d1",
                              borderRadius: 10,
                              // paddingTop: "1rem",
                              padding: "1rem",
                              // paddingBottom: "1rem",
                              // paddingBottom: "1rem",
                            }}
                          />
                        </label>
                      </div> */}
                      <div className="result">
                        {renderPhotos(selectedFiles)}
                        <label htmlFor="file" className="label">
                          {/*  <i className="material-icons">add_a_photo</i> */}
                          <AddIcon
                            style={{
                              width: "132",
                              height: "117px",
                              border: "1px solid #dcd1d1",
                              borderRadius: 10,
                              // paddingTop: "1rem",
                              padding: "1rem",
                              // paddingBottom: "1rem",
                              // paddingBottom: "1rem",
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </Grid>

                  {/* Images */}

                  {/*Description */}

                  <Grid xs={12} sm={12} md={12}>
                    <Typography
                      variant="h6"
                      style={{ marginLeft: "0rem", marginTop: "1rem" }}
                    >
                      Product Description
                    </Typography>
                    <Box style={{ marginLeft: "0rem" }}>
                      <TextField
                        error={Boolean(
                          touched.productName && errors.productName
                        )}
                        fullWidth
                        helperText={touched.productName && errors.productName}
                        // label="Product Name"
                        margin="normal"
                        multiline
                        rows={4}
                        name="productName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.productName}
                        variant="outlined"
                        placeholder="Product Description"
                        size="small"
                        InputProps={{
                          className: classes.inputTextField,
                        }}
                      />
                    </Box>
                  </Grid>
                  {/*Description */}
                </Grid>

                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box mt={2} style={{ textAlign: "center" }}>
                  <Button
                    // color="secondary"
                    style={{
                      background: "#7cdbaf",
                      color: "white",
                      width: "40%",
                    }}
                    disabled={isSubmitting}
                    // fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Add Now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>

          {/* Form*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
