import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

import DynamicSvgIcon from "../common/CustomIcons/DynamicSvgIcon";
import TaskListItemStyles from "../../assets/jss/components/taskListItemStyles";

const TaskItem = ({
  id,
  name,
  handleToggle,
  handleDelete,
  checked,
  dateTime,
  ...restProps
}) => {
  const classes = TaskListItemStyles();
  return (
    <ListItem
      key={id}
      role={undefined}
      dense
      button
      onClick={handleToggle(id)}
      {...restProps}
      className={classes.root}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          icon={<DynamicSvgIcon icon="circleUnchecked" />}
          checkedIcon={<DynamicSvgIcon fill="#91DC5A" icon="circleChecked" />}
          inputProps={{ "aria-labelledby": id }}
        />
      </ListItemIcon>
      <ListItemText id={id} primary={name} secondary={dateTime} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDelete(id)}
        >
          <DynamicSvgIcon icon="delete" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default TaskItem;
