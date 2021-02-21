import React from "react";
import { Container } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";
import listHeaderStyles from "../../assets/jss/components/listHeaderStyles";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const ListHeader = ({ label, to }) => {
  const classes = listHeaderStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} color="textPrimary">
        {label}
      </Typography>
      <Link to={to}>
        <Fab aria-label="Add" className={clsx(classes.addBtn)} color="primary">
          <AddIcon />
        </Fab>
      </Link>
    </Container>
  );
};

export default ListHeader;
