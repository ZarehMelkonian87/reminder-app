import { makeStyles } from "@material-ui/core";
import styles from "../assets/jss/layouts/userStyle";
import React from "react";

const useStyles = makeStyles(styles);

const GuestLayout = () => {
  const classes = useStyles();
  return <div className={classes.wrapper}> Guest Layout Here</div>;
};

export default GuestLayout;
