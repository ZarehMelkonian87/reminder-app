import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '318px',
    display: 'flex',
    position: 'relative',
    color: '#fff',
    fontFamily: 'Poppins',
    '& p , div': {
      fontFamily: 'Poppins',
      fontSize: 20,
    },
    '& svg': {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  },
  avatar: {
    left: '5%',
    top: '13px',
    zIndex: '1100',
    border: '4px',
    borderStyle: 'solid',
    borderColor: '#fff',
    display: 'flex',
    position: 'absolute',
  },
  userName: {
    zIndex: '1100',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: '5%',
    top: '18px',
  },
}));

export default headerStyles;
