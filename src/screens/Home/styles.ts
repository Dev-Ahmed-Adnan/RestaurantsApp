import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../styles";
import { getHeight, getWidth } from "../../styles/dimensions";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.BACKGROUND_GRAY,
    },
    sectionContainer: {
        width: "100%",
        marginTop: Spacing.S12,
    },
    sectionHeader: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: Spacing.S12,
        justifyContent: "space-between",
        alignItems: "center",
    },
    listIconContainer: {},
    wideItemContainer: {
        width: "100%",
        height: getHeight(150),
        marginTop: Spacing.S12,
    },
    gridItemContainer: {
        width: "44%",
        marginHorizontal: "3%",
        height: getHeight(150),
        marginTop: Spacing.S12,
    },
    wideItemImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        top: 0,
        right: 0,
        left: 0,
        resizeMode: "cover",
    },
    blurView: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 2,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: Colors.RGBA_BLACK(0.5),
    },
    wideItemContent: {
        flex: 1,
        zIndex: 3,
        justifyContent: "space-between",
        paddingVertical: Spacing.S8,
        paddingHorizontal: Spacing.S20,
        alignItems: "flex-start",
    },
    gridItemContent: {
        flex: 1,
        zIndex: 3,
        justifyContent: "space-between",
        paddingVertical: Spacing.S8,
        paddingHorizontal: Spacing.S12,
        alignItems: "center",
    },
    wideItemView: {
        paddingHorizontal: Spacing.S12,
        paddingVertical: Spacing.S4,
        backgroundColor: Colors.WHITE,
        borderRadius: getWidth(4),
    },
    searchBarContainer: {
        width: "95%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: getWidth(5),
        marginTop: Spacing.S12,
    },
    inputContainer: {
        flex: 1,
        paddingVertical: Spacing.S8,
        color: Colors.BLACK,
    },
});

export default styles;
