import { makeStyles } from '@material-ui/core/styles';

const TodayReminderStyle = makeStyles((theme) => ({
  root: {
    left: '5%',
    top: '80px',
    zIndex: '1100',
    display: 'flex',
    position: 'absolute',
    minWidth: 275,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    borderRadius: '30px 30px 30px 30px',
    color: '#fff',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    fontSize: 14,
  },
}));
export default TodayReminderStyle;
