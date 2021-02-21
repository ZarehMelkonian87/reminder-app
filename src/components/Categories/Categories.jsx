import React from "react";
import GridList from "@material-ui/core/GridList";

import CategoryCard from "./CategoryCard";
import categoryStyles from "../../assets/jss/components/categoryStyles";

const Categories = ({ listData }) => {
  const classes = categoryStyles();
  console.log("item: ", listData);
  return (
    <div className={classes.root}>
      <GridList className={classes.GridList}>
        {listData.map((item) => {
          return (
            <CategoryCard
              id={item.id}
              key={item.id}
              name={item.name}
              count={item.count}
              icon={item.icon}
            ></CategoryCard>
          );
        })}
      </GridList>
    </div>
  );
};
export default Categories;
