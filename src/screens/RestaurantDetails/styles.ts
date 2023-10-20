import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../styles";
import { getHeight } from "../../styles/dimensions";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.BACKGROUND_GRAY,
    },
    addressText: {
        width: "90%",
        textAlign: "center",
        alignSelf: "center",
        marginTop: Spacing.S12,
    },
    mapContainer: {
        width: "90%",
        height: getHeight(280),
        alignSelf: "center",
        marginTop: Spacing.S40,
    },
    map: {
        flex: 1,
    },
    addressDetials: {
        width: "100%",
        marginTop: Spacing.S12,
        paddingHorizontal: Spacing.S20,
        alignItems: "flex-start",
    },
});

export default styles;
