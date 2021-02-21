import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import NavBarStyles from '../../assets/jss/components/navBarStyls';
import NavbarLinkButton from './NavbarLinkButton';

const Navbar = ({ routes }) => {
  const classes = NavBarStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      {routes.map((prop, key) => {
        return (
          <NavbarLinkButton
            label={prop.name}
            key={key}
            to={prop.layout + prop.path}
            exact={prop.exact}
            icon={prop.icon}
          />
        );
      })}
    </BottomNavigation>
  );
};
export default Navbar;
