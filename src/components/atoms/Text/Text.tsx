import React, { memo, FC } from "react";
import { TextProps as RNTextProps, StyleProp, TextStyle } from "react-native";
import Animated from "react-native-reanimated";
import { Colors } from "../../../styles";
import { ColorsTypes } from "../../../styles/colors";
import {
    FontFamilyTypes,
    fonts,
    fontSizes,
    FontSizeTypes,
} from "../../../styles/typography";
import styles from "./styles";

export type StylesOrDefault<T> = "style" extends keyof T
    ? T["style"]
    : Record<string, unknown>;

export type TextProps = {
    color?: keyof ColorsTypes;
    fontFamily?: keyof FontFamilyTypes;
    // style?: StyleProp<AnimateStyle<StylesOrDefault<any>>>,
    style?: StyleProp<TextStyle>;
    children?: any;
    onPress?: () => void;
    numberOfLines?: number;
    /** 
    default fontSize = 12px
    
    H1= 22 px \
    H2= 16 px \
    H3= 12 px \
    H4= 9 px \
    P= 12 px 
    **/
    fontSize?: keyof FontSizeTypes;
};

type TextStyleTypes = StyleProp<TextStyle> | undefined;

const Text: FC<TextProps> = props => {
    return (
        <Animated.Text
            {...props}
            style={[styles.textStyle, customStyles(props), props.style]}
        />
    );
};

Text.defaultProps = {
    color: "BLACK",
};

const customStyles = ({ fontFamily, fontSize, color = "BLACK" }: TextProps) => {
    const _styles: TextStyleTypes = {
        color: Colors[color],
        // fontFamily: fonts[fontFamily],
        fontSize: fontSizes[fontSize || "P"],
    };
    return _styles;
};

export default memo(Text);
