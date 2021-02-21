import { makeStyles } from '@material-ui/core/styles';

const NavBarStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  active: {
    color: '#5F87E7',
    '& path': {
      fill: '#5F87E7',
    },
  },
});
export default NavBarStyles;
