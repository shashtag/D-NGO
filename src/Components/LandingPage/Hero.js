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

const useStyles = makeStyles((theme) => ({
  hero: {},
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  return <Grid container item></Grid>;
};

export default Hero;
