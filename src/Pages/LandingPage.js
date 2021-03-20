import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Avatar,
  TextField,
  Divider,
} from "@material-ui/core";
import Hero from "../Components/LandingPage/Hero";
import Works from "../Components/LandingPage/Works";
import DoIt from "../Components/LandingPage/DoIt";
import Footer from "../Components/Footer";

const useStyles = makeStyles((theme) => ({
  landing: {
    background: theme.palette.primary.main,
    padding: "0 12.5%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction='column' className={classes.landing} spacing={10}>
      <Grid item>
        <Hero />
      </Grid>
      <Grid item>
        <Works />
      </Grid>
      <Grid item>
        <Divider
          variant='middle'
          component='div'
          style={{ width: "70%", margin: theme.spacing(2, "auto", 6, "auto") }}
        />
      </Grid>
      <Grid item>
        <DoIt />
      </Grid>
      <Grid item>
        <Divider
          variant='middle'
          component='div'
          style={{ width: "70%", margin: theme.spacing(2, "auto", 6, "auto") }}
        />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
