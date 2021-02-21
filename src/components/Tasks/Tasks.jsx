import React from "react";
import List from "@material-ui/core/List";
import TaskListStyles from "../../assets/jss/components/taskListSyles";
import TaskItem from "./TaskItem";
import { deleteTask } from "../../store/actions/task";
import { useDispatch } from "react-redux";

const Tasks = ({ listData, children, onDataChanged, ...restProps }) => {
  const classes = TaskListStyles();
  const [checked, setChecked] = React.useState([]);
  const dispatch = useDispatch();

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (id) => dispatch(deleteTask({ id, status: "11" }));

  const isChecked = (id) => {
    return checked.indexOf(id) !== -1;
  };
  return (
    <List {...restProps} className={classes.root}>
      {listData.map((item) => {
        return (
          <div
            style={{
              backgroundColor: `${item.projectColor}`,
              paddingLeft: "5px",
              borderRadius: "10px",
            }}
            key={item._id}
          >
            <div
              style={{
                backgroundColor: "#fff",
              }}
            >
              <TaskItem
                key={item._id}
                id={item._id}
                name={item.description}
                dateTime={item.createdAt.substring(
                  item.createdAt.indexOf("T") + 1
                )}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                checked={isChecked(item._id)}
              />
            </div>
          </div>
        );
      })}

      {children}
    </List>
  );
};
export default Tasks;
