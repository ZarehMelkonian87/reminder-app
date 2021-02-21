import { makeStyles } from "@material-ui/core/styles";

const TaskListItemStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px 10px 10px 0px",
    marginBottom: "18px",
    boxShadow: "0 4px 9px 2px rgb(0 0 0 / 5%)",
    backgroundColor: theme.palette.background.paper,
    "& span": {
      fontFamily: "Poppins",
      color: "#554E8F",
      fontSize: 14,
    },
    "&:hover": {
      backgroundColor: "rgb(180, 247, 255, 0.38)",
    },
  },
}));

export default TaskListItemStyles;
