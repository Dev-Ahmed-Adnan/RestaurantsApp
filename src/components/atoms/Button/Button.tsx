import React, { FC, memo, Ref } from "react";
import {
    StyleProp,
    TextStyle,
    TouchableOpacityProps,
    ViewStyle,
} from "react-native";
import { IconsName, IconsProps } from "../../../assets/svgs";
import { ColorsTypes } from "../../../styles/colors";
import { TextProps } from "../Text/Text";
import { BorderButton } from "./BorderButton";

import { DefaultButton } from "./DefaultButton";
import { StandarButton } from "./StandarButton";
import { StandardBorderButton } from "./StandardBorderButton";

export type ButtonProps = {
    text?: string;
    type?: "default" | "standard" | "border" | "standardBorder";
    buttonScale?: number;
    iconName?: IconsName;
    textStyle?: TextProps;
    iconStyle?: IconsProps;
    iconContainerStyle?: StyleProp<ViewStyle>;
    textContainerStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    color?: keyof ColorsTypes;
    isLoading?: boolean;
    placeholder?: string;
    error?: string;
    ref?: Ref<TouchableOpacityProps>;
    enabledColor?: keyof ColorsTypes;
    disabledColor?: keyof ColorsTypes;
};

const Button: FC<TouchableOpacityProps & ButtonProps> = ({
    type = "default",
    ...props
}) => {
    const Component = {
        default: <DefaultButton {...props} type={type} />,
        border: <BorderButton {...props} type={type} />,
        standard: <StandarButton {...props} type={type} />,
        standardBorder: <StandardBorderButton {...props} type={type} />,
    };
    return Component[type];
};

export default memo(Button);
