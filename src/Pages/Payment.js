import React from "react";
import { Grid, Typography, useTheme, Button, Paper } from "@material-ui/core";
import pbg from "../Assets/pBg.png";
import Footer from "../Components/Footer";

const Payment = () => {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        item
        direction='column'
        style={{
          background: theme.palette.primary.main,
          padding: "0 12.5%",
          height: "500px",
          marginBottom: "100px",
        }}>
        <Grid
          container
          item
          style={{
            height: "500px",
          }}>
          <Grid item md={6} style={{ background: `url(${pbg})` }}></Grid>
          <Grid
            container
            item
            md={6}
            alignItems='center'
            style={{ paddingLeft: theme.spacing(8) }}>
            dssdsd
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        style={{
          background: theme.palette.primary.main,
          padding: "0 12.5%",
          height: "500px",
        }}>
        <Footer />
      </Grid>
    </>
  );
};

export default Payment;
