import React, { memo } from "react";
import { StyleSheet } from "react-native";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { images } from "../../../assets/img";
import styles from "./styles";

export const Image = (props: FastImageProps) => {
    return (
        <FastImage
            tintColor={props.tintColor}
            style={StyleSheet.flatten([styles.container, props.style])}
            resizeMode={props.resizeMode}
            source={
                typeof props.source === "number" || props.source?.uri
                    ? props.source
                    : images.user
            }
        />
    );
};

Image.defaultProps = {
    resizeMode: "contain",
};

export default memo(Image);
