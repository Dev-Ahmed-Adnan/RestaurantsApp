import React, { FC, memo } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Svgs } from "../../../assets";
import { Colors } from "../../../styles";
import Text from "../Text/Text";
import { ButtonProps } from "./Button";
import { ScaleButton } from "./ScaleButton";
import styles from "./styles";

const DefaultButton: FC<TouchableOpacityProps & ButtonProps> = memo(
    ({
        text,
        type,
        iconName,
        iconContainerStyle,
        textContainerStyle,
        isLoading,
        ...props
    }) => {
        return (
            <ScaleButton
                {...props}
                style={[styles.defaultButtonContainer, props.style]}>
                {iconName && !isLoading && (
                    <Svgs
                        name={iconName}
                        style={iconContainerStyle}
                        {...props.iconStyle}
                    />
                )}

                {text && !isLoading && (
                    <Text
                        fontSize="H2"
                        fontFamily="REGULAR"
                        color="WHITE"
                        {...props.textStyle}
                        style={[{}, textContainerStyle]}>
                        {text}
                    </Text>
                )}
                {props.children}
                {isLoading && (
                    <ActivityIndicator size={"small"} color={Colors.WHITE} />
                )}
            </ScaleButton>
        );
    },
);

export { DefaultButton };
