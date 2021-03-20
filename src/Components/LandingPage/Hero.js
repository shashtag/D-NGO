import React from "react";
import { Grid, Typography, useTheme, Button, Paper } from "@material-ui/core";
import heroImg from "../../Assets/heroImg.png";

const Hero = () => {
  const theme = useTheme();
  return (
    <Grid container item>
      <Paper
        square
        elevation={12}
        style={{
          width: "100%",
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10),
          paddingLeft: theme.spacing(2),
          background: theme.palette.grey[300],
        }}>
        <Grid container>
          <Grid container item md={6} direction='column'>
            <Grid item style={{ paddingTop: theme.spacing(5) }}>
              <Typography variant='h1'>
                Don’t Worry About{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Donation.
                </span>
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: theme.spacing(3) }}>
              <Typography variant='h4'>
                Be sure about where your money goes and who uses it.
              </Typography>
            </Grid>
            <Grid
              container
              justify='center'
              item
              style={{
                paddingTop: theme.spacing(3),
                marginTop: theme.spacing(3),
              }}>
              <Button
                variant='contained'
                color='secondary'
                style={{
                  padding: theme.spacing(3, 7),
                  borderRadius: theme.spacing(2.5),
                }}
                justify='center'>
                <Typography variant='h5'>Get Started {">"}</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container item md={6} justify='flex-end'>
            <Grid item md={10} style={{ paddingBottom: theme.spacing(3) }}>
              <img src={heroImg} alt='hero image' style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Hero;
