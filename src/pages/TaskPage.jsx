import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import ListHeader from "../components/Header/ListHeader";
import TaskCreateDialog from "../components/Tasks/TaskCreateDialog";
import { withRouter } from "react-router-dom";
import Tasks from "../components/Tasks/Tasks";
import { getTasks, createTask } from "../store/actions/task";

const TaskPage = ({ children, ...restProps }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);

  const handleClose = () => {
    restProps.history.push("/user/task");
  };

  const handleCreate = async (data) => {
    await dispatch(createTask({ data }));
    handleClose();
  };

  const onDataChanged = (newData) => {};

  useEffect(() => {
    const getAllTasks = async () => await dispatch(getTasks());
    getAllTasks();
  }, []);

  // eror page
  if (task.error && task.loading === false) return task.error.message;
  if (task.loading) return "Loading...";
  return (
    <>
      <ListHeader label="Tasks" to={"/user/task/create"} />
      <Container>
        <Tasks listData={task.items} onDataChanged={onDataChanged} />
        {children}
      </Container>

      {(restProps.match.params.action === "create" ||
        (restProps.match.params.action === "edit" &&
          !!restProps.match.params.id)) && (
        <TaskCreateDialog
          handleClose={handleClose}
          handleCreate={handleCreate}
          isOpen={true}
          id={restProps.match.params.id}
        />
      )}
    </>
  );
};

export default withRouter(TaskPage);
