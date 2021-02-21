import { makeStyles } from "@material-ui/core/styles";

const listHeaderStyles = makeStyles((theme) => ({
  addBtn: {
    border: "4px",
    borderStyle: "solid",
    borderColor: "#fff",
    boxShadow: "0px 7px 9px 0px rgb(30 209 2 / 45%)",
    right: "5%",
    top: "230px",
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    "& svg": {
      fontSize: 50,
    },
    backgroundColor: "#1ED102",
    "&:hover": {
      backgroundColor: "#18B400",
    },
  },

  title: {
    top: "270px",
    position: "absolute",
    fontSize: 25,
    fontWeight: "550",
    fontFamily: "Poppins",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

export default listHeaderStyles;
