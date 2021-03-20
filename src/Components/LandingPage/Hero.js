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
import heroImg from "../../Assets/heroImg.png";

const useStyles = makeStyles((theme) => ({
  hero: { background: theme.palette.grey },
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container item>
      <Paper
        className={classes.hero}
        square
        elevation={12}
        style={{
          width: "100%",
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10),
          paddingLeft: theme.spacing(2),
          background: theme.palette.grey[300],
        }}>
        <Grid container>
          <Grid container item md={6} direction='column'>
            <Grid item style={{ paddingTop: theme.spacing(5) }}>
              <Typography variant='h1'>
                Don’t Worry About{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  {" "}
                  Donation.
                </span>
              </Typography>
            </Grid>
            <Grid item style={{ paddingTop: theme.spacing(3) }}>
              <Typography variant='h4'>
                Be sure about where your money goes and who uses it.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item md={6} justify='flex-end'>
            <Grid item md={10} style={{ paddingBottom: theme.spacing(3) }}>
              <img src={heroImg} style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Hero;
