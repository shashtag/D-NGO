import React from "react";
import { Grid, Typography, useTheme, Button, Paper } from "@material-ui/core";
import hbg from "../Assets/hBg.png";
import Footer from "../Components/Footer";

const Hospital = () => {
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
          <Grid item md={6} style={{ background: `url(${hbg})` }}></Grid>
          <Grid
            container
            item
            md={6}
            alignItems='center'
            style={{ paddingLeft: theme.spacing(8) }}>
            <div>
              <Typography variant='h6'>You have recieved 20,000 $ </Typography>
              <Typography variant='h6'>
                This donation was made by John
              </Typography>
              <Typography variant='h6'>
                Contact John here : jhon21@gmail.com
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
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
          <Grid item md={6} style={{ background: `url(${hbg})` }}></Grid>
          <Grid
            container
            item
            md={6}
            alignItems='center'
            style={{ paddingLeft: theme.spacing(8) }}>
            <div>
              <Typography variant='h6'>You have recieved 20,000 $ </Typography>
              <Typography variant='h6'>
                This donation was made by John
              </Typography>
              <Typography variant='h6'>
                Contact John here : jhon21@gmail.com
              </Typography>
            </div>
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

export default Hospital;
