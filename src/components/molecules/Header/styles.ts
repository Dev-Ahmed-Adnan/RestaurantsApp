import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../../styles";
import { getWidth, scale } from "../../../styles/dimensions";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.BACKGROUND_GRAY,
        marginTop: Spacing.S56,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: Spacing.S16,
        alignSelf: "flex-start",
    },
    buttonContainer: {
        width: getWidth(26),
        height: getWidth(26),
        backgroundColor: Colors.BLACK,
        borderRadius: getWidth(3),
        justifyContent: "center",
        alignItems: "center",
    },
    buttonIcon: {
        color: Colors.WHITE,
        width: scale(24),
        height: scale(24),
    },
    titleStyle: {
        flex: 1,
        textAlign: "center",
    },
});

export default styles;
