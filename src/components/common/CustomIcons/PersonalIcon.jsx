import { SvgIcon } from "@material-ui/core";
import React from "react";

const PersonalIcon = ({ ...restProps }) => {
  return (
    <SvgIcon {...restProps} viewBox="0 0 65.114 65.114">
      <circle
        cx="32.557"
        cy="32.557"
        r="32.557"
        fill="rgba(255,238,155,0.36)"
      ></circle>
      <SvgIcon viewBox="-11 -8 42 42">
        <path
          fill="#ffe120"
          d="M98.508,5.736a5.551,5.551,0,0,1-1.68,4.056,5.551,5.551,0,0,1-4.056,1.68h0a5.552,5.552,0,0,1-4.053-1.68,5.55,5.55,0,0,1-1.68-4.056,5.55,5.55,0,0,1,1.68-4.056A5.549,5.549,0,0,1,92.769,0h0a5.553,5.553,0,0,1,4.056,1.68A5.55,5.55,0,0,1,98.508,5.736Zm0,0"
          transform="translate(-82.987 0)"
          {...restProps}
        />
        <path
          fill="#ffe120"
          d="M19.871,255.536a3.954,3.954,0,0,1-1.175,2.992,4.228,4.228,0,0,1-3.027,1.1H4.2a4.226,4.226,0,0,1-3.026-1.1A3.953,3.953,0,0,1,0,255.536c0-.478.016-.951.047-1.406a14.083,14.083,0,0,1,.193-1.505,11.879,11.879,0,0,1,.37-1.513,7.5,7.5,0,0,1,.622-1.412,5.343,5.343,0,0,1,.938-1.222,4.136,4.136,0,0,1,1.348-.847,4.66,4.66,0,0,1,1.72-.311,1.743,1.743,0,0,1,.932.395c.284.185.611.4.972.627A5.549,5.549,0,0,0,8.4,248.9a5.007,5.007,0,0,0,1.385.246l.152,0a5,5,0,0,0,1.537-.248,5.549,5.549,0,0,0,1.257-.554c.365-.233.692-.444.972-.626a1.741,1.741,0,0,1,.932-.4,4.662,4.662,0,0,1,1.72.311,4.141,4.141,0,0,1,1.347.847,5.324,5.324,0,0,1,.938,1.222,7.477,7.477,0,0,1,.622,1.411,11.869,11.869,0,0,1,.37,1.513,14.212,14.212,0,0,1,.193,1.5c.032.454.048.927.049,1.407Zm0,0"
          transform="translate(0 -235.815)"
          {...restProps}
        />
      </SvgIcon>
    </SvgIcon>
  );
};
export default PersonalIcon;
