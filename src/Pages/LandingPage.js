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

const useStyles = makeStyles((theme) => ({
  landing: {
    background: theme.palette.primary.main,
    padding: "0 15px",
    [theme.breakpoints.up("md")]: {
      padding: "0 3.2%",
    },
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
    </Grid>
  );
};

export default LandingPage;
