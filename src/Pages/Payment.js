import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  Button,
  Paper,
  TextField,
} from "@material-ui/core";
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
            style={{
              paddingLeft: theme.spacing(8),
              background: theme.palette.grey[300],
            }}>
            <TextField
              label='Aadhar Number'
              placeholder='Placeholder'
              variant='outlined'
            />
            <TextField
              label='Amount'
              placeholder='Placeholder'
              variant='outlined'
            />
            <TextField
              label='Currency'
              placeholder='Placeholder'
              variant='outlined'
            />
            <TextField
              label='Bank Account no'
              placeholder='Placeholder'
              variant='outlined'
            />
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
