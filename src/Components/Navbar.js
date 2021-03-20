import React from "react";
import {
  AppBar,
  fade,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InputBase from "@material-ui/core/InputBase";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import logoMain from "../Assets/logoMain.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  grow2: {
    flexGrow: 4,
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <AppBar
        position='static'
        style={{
          borderBottom: `1px solid ${theme.palette.grey[300]}`,
        }}>
        <Toolbar
          style={{
            margin: "32px 10.5%",
            justifyContent: "space-between",
          }}>
          <div style={{ display: "flex" }} className={classes.grow2}>
            <img src={logoMain} alt='kalafax logo' />
          </div>
          {/* <div className={classes.grow} /> */}
          <div
            style={{ justifyContent: "flex-end" }}
            className={[classes.sectionDesktop, classes.grow].join(" ")}>
            <Button
              component={Link}
              to='/login'
              // variant='contained'
              size='large'
              color='primary'
              style={{
                borderRadius: "20px",
              }}>
              <Typography variant='h6' style={{ color: "#333333" }}>
                Login
              </Typography>
            </Button>
            <Button
              component={Link}
              to='/login'
              // variant='contained'
              size='large'
              color='primary'
              style={{
                borderRadius: "20px",
                border: "1px solid #333333",
                marginLeft: "50px",
              }}>
              <Typography variant='h6' style={{ color: "#333333" }}>
                Signup
              </Typography>
            </Button>
          </div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
    </>
  );
}
