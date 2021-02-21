import { makeStyles } from '@material-ui/core/styles';

const categoryCardStyles = makeStyles((theme) => ({
  root: {
    width: 130,
    height: 150,
    margin: theme.spacing(1),
  },

  flexCenter: {
    justifyContent: 'center',
    display: 'flex',
  },

  wrapper: {
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'center',
  },

  icon: {
    width: '50px',
    height: '50px',
  },
}));

export default categoryCardStyles;
