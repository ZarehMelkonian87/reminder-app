import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import TodayReminderStyle from './../../assets/jss/components/todayReminderStyle';

const TodayReminder = () => {
  const jwt = useSelector((state) => state.jwt);
  const classes = TodayReminderStyle();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} component='h2'>
          Today Reminder
        </Typography>
        <Typography className={classes.pos} component='h2'>
          Meeting with client
        </Typography>
        <Typography className={classes.pos} component='h2'>
          13.00 PM
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodayReminder;
