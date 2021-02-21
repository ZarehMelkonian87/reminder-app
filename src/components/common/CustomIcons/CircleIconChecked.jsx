import { SvgIcon } from "@material-ui/core";
import React from "react";

const CircleIconChecked = ({ ...restProps }) => {
  return (
    <SvgIcon {...restProps} viewBox="0 0 18 18">
      <path
        id="checked"
        d="M9,0a9,9,0,1,0,9,9A8.974,8.974,0,0,0,9,0Zm5.2,6.177h0L7.65,12.968a.371.371,0,0,1-.286.123.318.318,0,0,1-.286-.123L3.886,9.532,3.8,9.45a.4.4,0,0,1,0-.573L4.377,8.3a.4.4,0,0,1,.573,0l.041.041,2.25,2.414a.2.2,0,0,0,.286,0l5.482-5.686h.041a.4.4,0,0,1,.573,0l.573.573a.349.349,0,0,1,0,.532Z"
        fill="#FF0036"
        {...restProps}
      />
    </SvgIcon>
  );
};

export default CircleIconChecked;
