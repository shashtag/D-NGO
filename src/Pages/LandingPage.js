import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Avatar,
  TextField,
} from "@material-ui/core";
import Hero from "../Components/LandingPage/Hero";

const useStyles = makeStyles((theme) => ({
  landing: {
    background:
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
    <Grid container direction='column' className={classes.landing}>
      <Grid item>
        <Hero />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
