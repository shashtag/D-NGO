import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
  Avatar,
  TextField,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {},
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container item>
      <Paper></Paper>
    </Grid>
  );
};

export default Hero;
