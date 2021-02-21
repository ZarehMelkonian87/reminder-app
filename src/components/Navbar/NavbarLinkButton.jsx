import React from 'react';
import { BottomNavigationAction } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import NavBarStyles from '../../assets/jss/components/navBarStyls';

const NavbarLinkButton = ({ label, key, to, exact, icon, ...restProps }) => {
  const classes = NavBarStyles();
  return (
    <NavLink key={key} to={to} exact={exact} activeClassName={classes.active}>
      <BottomNavigationAction label={label} icon={icon} {...restProps} />
    </NavLink>
  );
};

export default NavbarLinkButton;
