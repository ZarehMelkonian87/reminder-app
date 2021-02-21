import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { v4 as uuid } from 'uuid';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateAndTimePicker from '../common/date/DateAndTimePicker';

const TaskCreateDialog = ({ handleClose, handleCreate, isOpen }) => {
  const [data, setData] = React.useState({});

  const LocaleDate = new Date().toISOString({
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const newData = { ...data, [e.target.name]: value };
    setData(newData);
  };

  useEffect(() => {
    if (isOpen) {
      const newData = { ...data, id: uuid() };
      console.log(LocaleDate.substring(0, 16).replace('T', ' '));
      setData({
        id: uuid(),
        description: '',
        dateTime: ` ${LocaleDate.substring(0, 16)}`,
        projectId: 1,
        projectColor: '#5DE61A',
      });
    }
  }, [isOpen]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Create Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='description'
            name='description'
            label='Task'
            type='text'
            fullWidth
            onChange={handleChange}
          />
          <DateAndTimePicker
            defaultValue={LocaleDate.substring(0, 16)}
            label='Next appointment'
            name='dateTime'
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => handleCreate(data)} color='primary'>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskCreateDialog;
