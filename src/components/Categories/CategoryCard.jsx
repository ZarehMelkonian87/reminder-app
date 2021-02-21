import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DynamicSvgIcon from "../../components/common/CustomIcons/DynamicSvgIcon";
import categoryCardStyles from "../../assets/jss/components/categoryCardStyles";

const CategoryCard = ({ id, name, count, icon, ...restProps }) => {
  const classes = categoryCardStyles();
  return (
    <Paper elevation={3} key={id} className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.flexCenter}>
          <DynamicSvgIcon tag={icon} className={classes.icon} />
        </div>
      </div>

      <Typography
        variant="button"
        display="block"
        gutterBottom
        className={classes.flexCenter}
      >
        {name}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={classes.flexCenter}
      >
        {count}
      </Typography>
    </Paper>
  );
};
export default CategoryCard;
