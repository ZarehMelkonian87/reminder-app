import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes.js";
import styles from "../assets/jss/layouts/userStyle";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path + prop.action}
            component={prop.component}
            key={key}
            exact={prop.exact}
          />
        );
      }
      return null;
    })}
    <Redirect from="/user" to="/user/" />
  </Switch>
);

const useStyles = makeStyles(styles);

const UserLayout = () => {
  const jwt = useSelector((state) => state.jwt);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header userData={jwt.user} />
      {switchRoutes}
      <Navbar routes={routes} />
    </div>
  );
};
export default UserLayout;
