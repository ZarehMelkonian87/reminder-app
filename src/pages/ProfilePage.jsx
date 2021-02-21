import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProfilePageStyle from './../assets/jss/pages/profilePageStyle';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const jwt = useSelector((state) => state.jwt);
  const classes = ProfilePageStyle();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {jwt.user.name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'></Typography>
        <Typography variant='body2' component='p'>
          Age: {jwt.user.age}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
