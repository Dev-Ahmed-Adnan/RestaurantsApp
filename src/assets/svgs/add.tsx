import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Add = (props: SvgProps) => (
    <Svg
        height={24}
        id="Layer_1"
        viewBox="0 0 32 32"
        width={24}
        {...props}
    >
        <Path fill={props.color || "gray"} d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
    </Svg>
)

export default Add
