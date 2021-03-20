import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h4: { marginBottom: theme.spacing(4) },
}));

const Footer = () => {
  const classes = useStyles();

  const theme = useTheme();
  return (
    <Grid container>
      <Paper
        square
        elevation={0}
        style={{
          width: "100%",
          padding: theme.spacing(10, 15),
          background: theme.palette.grey[300],
        }}>
        <Grid container item>
          <Grid container item direction='column' md={4}>
            <Grid item>
              <Typography variant='h4' className={classes.h4}>
                Lorem
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
          </Grid>
          <Grid container item direction='column' md={4}>
            <Grid item>
              <Typography variant='h4' className={classes.h4}>
                Lorem
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
          </Grid>
          <Grid container item direction='column' md={4}>
            <Grid item>
              <Typography variant='h4' className={classes.h4}>
                Lorem
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>Lorem</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Footer;
