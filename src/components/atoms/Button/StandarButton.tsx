import React, { FC, memo } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Svgs } from "../../../assets";
import { Colors, Spacing } from "../../../styles";
import Text from "../Text/Text";
import { ButtonProps } from "./Button";
import { ScaleButton } from "./ScaleButton";
import styles from "./styles";

const StandarButton: FC<TouchableOpacityProps & ButtonProps> = memo(
    ({
        text,
        type,
        iconName,
        iconContainerStyle,
        textContainerStyle,
        disabledColor = "LIGHT_GRAY1",
        enabledColor = "PINK",
        isLoading,
        ...props
    }) => {
        return (
            <ScaleButton
                {...props}
                style={[
                    {
                        ...styles.standarButtonContainer,
                        backgroundColor: !props.disabled
                            ? Colors[enabledColor]
                            : Colors[disabledColor],
                    },
                    props.style,
                ]}>
                {iconName && !isLoading && (
                    <Svgs
                        name={iconName}
                        style={iconContainerStyle}
                        {...props.iconStyle}
                    />
                )}

                {text && !isLoading && (
                    <Text
                        fontSize="FS14"
                        fontFamily="mediumRoboto"
                        color="WHITE"
                        {...props.textStyle}
                        style={[
                            {
                                paddingHorizontal: Spacing.S8,
                            },
                            textContainerStyle,
                        ]}>
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

export { StandarButton };
