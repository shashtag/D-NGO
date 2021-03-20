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
import doIt from "../../Assets/doIt.png";

const DoIt = () => {
  const theme = useTheme();
  return (
    <Grid container item direction='column'>
      <Grid item md={12}>
        <Typography
          variant='h2'
          align='center'
          style={{ marginBottom: theme.spacing(7) }}>
          How do we do it?
        </Typography>
      </Grid>
      <Grid
        container
        item
        justify='center'
        style={{ marginBottom: theme.spacing(7) }}>
        <img src={doIt} alt='do it' />
      </Grid>
      <Grid container item>
        <Typography
          variant='h5'
          align='center'
          style={{ margin: theme.spacing(0, 2, 0, 2) }}>
          We generate a report based on the information like the food you eat ,
          the water you drink etc. to tell you exactly when your hairs will say
          goodbye to you
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DoIt;
