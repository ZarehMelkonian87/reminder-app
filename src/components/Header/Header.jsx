import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import DynamicSvgIcon from '../../components/common/CustomIcons/DynamicSvgIcon';
import headerStyles from '../../assets/jss/components/headerStyles';
import TodayReminder from '../TodayReminder/TodayReminder';

const Header = ({ userData }) => {
  const classes = headerStyles();
  const screenWidth = { windowWidth: window.innerWidth };

  return (
    <div className={classes.root}>
      <DynamicSvgIcon
        width={screenWidth.windowWidth}
        height='318'
        viewBox={`0 0 320 318`}
        icon='headerBG'
      />
      <Avatar className={classes.avatar}>{'ZM'}</Avatar>
      <Typography className={classes.userName}>
        {userData ? userData.name : ''}
      </Typography>
      <TodayReminder />
    </div>
  );
};
export default Header;
