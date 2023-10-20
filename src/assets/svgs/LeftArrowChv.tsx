import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LeftArrowChv = (props: SvgProps) => (
    <Svg width={64} height={64} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            stroke={props.color || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m15 7-5 5 5 5"
        />
    </Svg>
);
export default LeftArrowChv;
