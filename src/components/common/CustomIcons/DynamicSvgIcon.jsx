//https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9

import React from "react";
import CategoryIcon from "./CategoryIcon";
import CircleIconChecked from "./CircleIconChecked";
import CircleIconUnchecked from "./CircleIconUnchecked ";
import DeleteIcon from "./DeleteIcon.jsx";
import HeaderBG from "./HeaderBG.jsx";
import HomeIcon from "./HomeIcon";
import PersonalIcon from "./PersonalIcon";
import ProfileIcon from "./ProfileIcon";

const DynamicSvgIcon = ({ icon, ...restProps }) => {
  const components = {
    personal: PersonalIcon,
    home: HomeIcon,
    circleUnchecked: CircleIconUnchecked,
    circleChecked: CircleIconChecked,
    category: CategoryIcon,
    delete: DeleteIcon,
    profile: ProfileIcon,
    headerBG: HeaderBG,
  };

  const IconName = components[icon || "personal"];
  return <IconName {...restProps} />;
};
export default DynamicSvgIcon;
