import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../../styles";
import { RGBA_WHITE } from "../../../styles/colors";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";
import { fonts, fontSizes } from "../../../styles/typography";
const styles = StyleSheet.create({
    container: {
        height: getHeight(62),
        width: getWidth() - scale(48),
        justifyContent: "flex-end",
    },
    placeholder: {
        position: "absolute",
        color: Colors.RGBA_WHITE(0.7),
    },
    input: {
        flex: 1,
        height: getHeight(46),
        fontFamily: fonts.regularRoboto,
        fontSize: fontSizes.FS18,
        color: Colors.RGBA_WHITE(0.8),
    },
    line: {
        width: "100%",
        height: 1.5,
        backgroundColor: Colors.WHITE,
        position: "absolute",
        bottom: 0,
        overflow: "hidden",
    },
    animatedLine: {
        width: "100%",
        height: "100%",
        backgroundColor: "gray",
        position: "absolute",
    },
    errorText: {
        width: getWidth() - scale(48),
        textAlign: "left",
        marginTop: 5,
    },
    inputStyle: {},
    authInputContainer: {
        backgroundColor: RGBA_WHITE(0.35),
        borderRadius: getWidth(5),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginVertical: Spacing.S4,
    },
    authInput: {
        height: getHeight(40),
        fontSize: fontSizes.FS16,
        textAlignVertical: "center",
        paddingVertical: 0,
    },

    // Modal Input
    modalInputContainer: {
        width: "92%",
        borderWidth: 1,
        height: getHeight(40),
        backgroundColor: Colors.WHITE,
        borderRadius: getHeight(6),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderColor: Colors.BORDER2,
        marginTop: Spacing.S8,
    },
    inputSubContainer: {
        width: "90%",
        height: "100%",
        paddingHorizontal: Spacing.S8,
        paddingVertical: Spacing.S4,
    },
    modalInputStyle: {
        width: "100%",
        flex: 1,
        fontSize: fontSizes.FS13,
        color: Colors.BLACK,
        fontFamily: fonts.mediumRoboto,
    },
    iconContainer: {
        width: getHeight(20),
        height: getHeight(20),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.GRAYF2F3F9,
        borderRadius: 100,
    },
    iconStyle: {
        color: Colors.GRAY959595,
        width: getHeight(10),
        height: getHeight(10),
    },
    drowDownButton: {
        positiosn: "absolute",
        right: getWidth(30),
        width: getHeight(20),
        height: getHeight(20),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.GRAYF2F3F9,
        borderRadius: 100,
        top: getHeight(40) - getHeight(32),
        zIndex: 10000000,
    },
    drowDownIcon: {
        color: Colors.GRAY959595,
        width: getHeight(10),
        height: getHeight(10),
    },
    dropDownContainer: {
        position: "absolute",
        bottom: getHeight(35),
        right: getHeight(10),
        backgroundColor: Colors.WHITE,
        borderRadius: getHeight(8),
        shadowColor: "#7e7d7d",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        paddingHorizontal: Spacing.S12,
        paddingVertical: Spacing.S12,
        zIndex: 100000,
        // maxHeight: getHeight(160),
        // width: getWidth(170)
    },
    dropDownItem: {
        alignSelf: "flex-start",
        width: "100%",
        marginBottom: Spacing.S12,
    },
});
export default styles;
