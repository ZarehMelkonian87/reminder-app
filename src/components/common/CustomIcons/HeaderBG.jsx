import { SvgIcon } from "@material-ui/core";
import React from "react";

const HeaderBG = ({ ...restProps }) => {
  return (
    <SvgIcon {...restProps}>
      <g {...restProps}>
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="1.813"
            y1="-0.07"
            x2="0.308"
            y2="0.867"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#ff0036" />
            <stop offset="1" stopColor="#ff6787" />
          </linearGradient>
        </defs>
        <path
          id="headerBGFull"
          d="M453,294.5s38.585-90.529,182.958-94.707c87.49-2.532,153.51-19.59,192.227-32.732,0-24.98.044-13.255.044-189.079l-.217-.993L453-23.072Z"
          transform="translate(-453 23.072)"
          fill="url(#linear-gradient)"
        />
      </g>
    </SvgIcon>
  );
};
export default HeaderBG;
