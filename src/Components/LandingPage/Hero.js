import React from "react";
import { Grid, Typography, useTheme, Button, Paper } from "@material-ui/core";
import heroImg from "../../Assets/heroImg.png";

const Hero = () => {
  const theme = useTheme();
  return (
    <Grid container item>
      <Paper
        square
        elevation={2}
        style={{
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10),
          paddingLeft: theme.spacing(6),
          background: theme.palette.grey[300],
        }}>
        <Grid container item spacing={6}>
          <Grid container item md={6} direction='column'>
            <Grid item style={{ paddingTop: theme.spacing(5) }}>
              <Typography variant='h2'>
                Don’t Worry About{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Donation.
                </span>
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: theme.spacing(2) }}>
              <Typography variant='h5'>
                Be sure about where your money goes and who uses it.
              </Typography>
            </Grid>
            <Grid
              container
              justify='center'
              item
              style={{
                paddingTop: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}>
              <Button
                variant='contained'
                color='secondary'
                style={{
                  padding: theme.spacing(1, 5),
                  borderRadius: theme.spacing(2.5),
                }}
                justify='center'>
                <Typography variant='h6'>Get Started {">"}</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={6}
            // justify='flex-start'
          >
            <Grid item md={10} style={{ paddingBottom: theme.spacing(2) }}>
              <img src={heroImg} alt='hero image' style={{ width: "120%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Hero;
