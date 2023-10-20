import React from "react";
import { SvgProps } from "react-native-svg";
import Add from "./add";
import LeftArrowChv from "./LeftArrowChv";
import List from "./List";
import Eye from "./Eye";
import Search from "./Search";
import Close from "./Close";

export type IconsName = "add" | "LeftArrowChv" | "List" | "Eye" | "Search" | "Close";

export type RotateTypes = "left" | "right" | "top" | "bottom ";
export interface IconsProps {
    color?: string;
    width?: number;
    height?: number;
    name?: IconsName;
    rotate?: RotateTypes;
    type?: "image" | "svg";
}

const getRotate = (rotate: string) => {
    switch (rotate) {
        case "top":
            return "90deg";
        case "bottom":
            return "270deg";
        case "left":
            return "0deg";
        case "right":
            return "-180deg";
        default:
            return "0deg";
    }
};

function Icon(props: IconsProps & SvgProps) {
    const style = { transform: [{ rotate: getRotate(props.rotate || "") }] };
    switch (props.name) {
        case "add":
            return <Add {...props} style={[props.rotate && style, props.style]} />;
        case "Close":
            return <Close {...props} style={[props.rotate && style, props.style]} />;
        case "Search":
            return <Search {...props} style={[props.rotate && style, props.style]} />;
        case "Eye":
            return <Eye {...props} style={[props.rotate && style, props.style]} />;
        case "List":
            return <List {...props} style={[props.rotate && style, props.style]} />;
        case "LeftArrowChv":
            return <LeftArrowChv {...props} style={[props.rotate && style, props.style]} />;

        default:
            return <Add {...props} style={[props.rotate && style, props.style]} />;
    }
}

export default Icon;
