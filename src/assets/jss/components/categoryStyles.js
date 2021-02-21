import { makeStyles } from "@material-ui/core/styles";

const categoryStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",

    backgroundColor: theme.palette.background.paper,
  },

  GridList: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default categoryStyles;
