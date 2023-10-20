import React, { FC, memo } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Svgs } from "../../../assets";
import { Colors, Spacing } from "../../../styles";
import Text from "../Text/Text";
import { ButtonProps } from "./Button";
import { ScaleButton } from "./ScaleButton";
import styles from "./styles";

const BorderButton: FC<TouchableOpacityProps & ButtonProps> = memo(
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
                style={[
                    styles.borderButtonContainer,
                    {
                        borderColor: Colors[props.color || "DARK_GRAY"],
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
                        fontSize="H2"
                        fontFamily="REGULAR"
                        {...props.textStyle}
                        color={props.color}
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
                    <ActivityIndicator size={"small"} color={Colors.PRIMARY} />
                )}
            </ScaleButton>
        );
    },
);

export { BorderButton };
