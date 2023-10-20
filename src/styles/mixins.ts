import { Dimensions, PixelRatio } from "react-native";
import { fontSizes } from "./typography";

const WINDOW_WIDTH = Dimensions.get("window").width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
    (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export function boxShadow(
    color: string,
    offset = { height: 2, width: 2 },
    radius = 8,
    opacity = 0.2,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}

export function borderRadius(size: number): {
    width: number;
    height: number;
    borderRadius: number;
    overflow: "hidden";
} {
    return {
        width: size,
        height: size,
        borderRadius: size,
        overflow: "hidden",
    };
}
