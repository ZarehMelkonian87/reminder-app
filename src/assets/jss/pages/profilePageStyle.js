import { makeStyles } from '@material-ui/core/styles';

const ProfilePageStyle = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    border: 'none',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.0)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
export default ProfilePageStyle;
