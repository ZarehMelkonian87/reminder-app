import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Categories from "../components/Categories/Categories";
import projectData from "../data/projectData.json";
import ListHeader from "../components/Header/ListHeader";

const CategoryPage = () => {
  const [data, setData] = React.useState(projectData);
  const [open, setOpen] = React.useState(false);

  const handleAdd = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = (item) => () => {
    setOpen(false);

    const newData = [...data];

    newData.push(item);

    setData(newData);
  };

  const onDataChanged = (newData) => {
    setData(newData);
  };

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  return (
    <>
      <ListHeader label="Categories" to={"/user/category/create"} />
      <Container>
        <Categories listData={data} onDataChanged={onDataChanged} />
      </Container>
    </>
  );
};

export default CategoryPage;
