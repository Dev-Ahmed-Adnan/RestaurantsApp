import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Button, Text } from "../../atoms";
import Icon from "../../../assets/svgs";
import { useNavigationHooks } from "../../../hooks";
import { MainAppStackTypes } from "../../../navigation/navigation-types";

type HeaderType = {
    backButton?: boolean;
    title?: string;
};

function Header({ backButton, title }: HeaderType) {
    const { goBack } = useNavigationHooks<MainAppStackTypes>();

    return (
        <View style={styles.container}>
            {backButton ? (
                <Button
                    iconName="LeftArrowChv"
                    style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    containerStyle={styles.buttonContainer}
                    iconStyle={styles.buttonIcon}
                    onPress={goBack}
                />
            ) : null}
            <Text fontSize="FS24" fontFamily="EXTRA_BOLD" color="BLACK" style={styles.titleStyle}>
                {title}
            </Text>
        </View>
    );
}
export default Header;
