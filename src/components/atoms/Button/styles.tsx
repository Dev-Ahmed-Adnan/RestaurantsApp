import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";

const styles = StyleSheet.create({
    defaultButtonContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: getHeight(10),
    },
    borderButtonContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: getHeight(10),
        borderWidth: 1,
        borderColor: Colors.BLUE,
    },

    standarButtonContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: getHeight(10),
        backgroundColor: Colors.PINK,
        width: getWidth() - scale(48),
        height: getHeight(40),
        borderRadius: scale(5),
        justifyContent: "center",
    },

    standarBorderButtonContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: getHeight(10),
        backgroundColor: Colors.PINK,
        width: getWidth() - scale(48),
        height: getHeight(40),
        borderRadius: scale(5),
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors.PINK,
    },
});
export default styles;
