import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../styles";
import { scale } from "../../styles/dimensions";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#202020",
    },
    logo: {
        width: scale(190),
        height: scale(90),
        alignSelf: "center",
    },
    logoVectors: {
        width: scale(180),
        height: scale(98),
        alignSelf: "center",
        position: "absolute",
        zIndex: 1000,
    },
    bottomText: {
        position: "absolute",
        zIndex: 1000,
        alignSelf: "center",
        bottom: Spacing.S32,
    },
});

export default styles;
