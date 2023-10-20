import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const List = (props: SvgProps) => (
    <Svg width={64} height={64} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            stroke={props.color || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m8 6 13 .001m-13 6h13m-13 6h13M3.5 6h.01m-.01 6h.01m-.01 6h.01M4 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        />
    </Svg>
);
export default List;
