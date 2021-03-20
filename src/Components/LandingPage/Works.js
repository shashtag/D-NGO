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
import one from "../../Assets/one.png";
import two from "../../Assets/two.png";
import three from "../../Assets/three.png";

const Works = () => {
  const theme = useTheme();

  return (
    <Grid container item style={{ paddingTop: theme.spacing(7) }}>
      <Grid item md={12}>
        <Typography
          variant='h2'
          align='center'
          style={{ marginBottom: theme.spacing(3) }}>
          How it works?
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography
          variant='h4'
          align='center'
          style={{ marginBottom: theme.spacing(10) }}>
          Upload video of the meeting to generate text summary
        </Typography>
      </Grid>

      <Grid container item direction='column' md={4} alignItems='center'>
        <Grid
          item
          container
          justify='center'
          alignItems='center'
          style={{ height: "150px" }}>
          <img src={one} alt='one' />
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center'>
            Send us your personal information
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction='column' md={4} alignItems='center'>
        <Grid
          item
          container
          justify='center'
          alignItems='center'
          style={{ height: "150px" }}>
          <img src={two} alt='two' />
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center'>
            Sit back and relax as we send the money to the rightful authority
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction='column' md={4} alignItems='center'>
        <Grid
          item
          container
          justify='center'
          alignItems='center'
          style={{ height: "150px" }}>
          <img src={three} alt='three' />
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center'>
            Transaction done , all you money is with authority whom you donated.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Works;
