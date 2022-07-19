import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
      d="M9.19727 10.4082L11.9449 13.737"
      stroke="#707070"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </Svg>
  );
};

export default Icon;
