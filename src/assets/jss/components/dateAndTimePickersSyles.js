import { makeStyles } from '@material-ui/core/styles';

const DateAndTimePickersSyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default DateAndTimePickersSyles;
