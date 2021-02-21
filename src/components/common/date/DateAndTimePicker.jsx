import React from 'react';
import TextField from '@material-ui/core/TextField';
import DateAndTimePickersSyles from '../../../assets/jss/components/dateAndTimePickersSyles';

const DateAndTimePicker = ({ ...restProps }) => {
  const classes = DateAndTimePickersSyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id='datetime-local'
        label='Next appointment'
        type='datetime-local'
        defaultValue='2017-05-24T10:30'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        {...restProps}
      />
    </form>
  );
};
export default DateAndTimePicker;
