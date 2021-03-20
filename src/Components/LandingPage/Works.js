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

const Works = () => {
  return (
    <Grid container item>
      <Grid container item direction='column' md={4}>
        <Grid item></Grid>
        <Grid item>
          <Typography variant='h5'>
            Send us your personal information
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction='column' md={4}>
        <Grid item></Grid>
        <Grid item>
          <Typography variant='h5'>
            Sit back and relax as we send the money to the rightful authority
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction='column' md={4}>
        <Grid item></Grid>
        <Grid item>
          <Typography variant='h5'>
            Transaction done , all you money is with authority whom you donated.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Works;
