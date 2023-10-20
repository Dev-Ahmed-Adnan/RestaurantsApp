import { Platform } from "react-native";
import { scale } from "./dimensions";

type FontFamilyTypes = {
    REGULAR: any;
    MEDIUM: any;
    EXTRA_BOLD: any;
    BOLD: any;
    LIGHT: any;
    // black: any,
    // blackItalic: any,
    // bold: any,
    // boldItalic: any,
    // italic: any,
    // light: any,
    // lightItalic: any,
    // medium: any,
    // mediumItalic: any,
    // regular: any,
    // thin: any,
    // thinItalic: any,
    blackRoboto: any;
    blackItalicRoboto: any;
    boldRoboto: any;
    boldItalicRoboto: any;
    italicRoboto: any;
    lightRoboto: any;
    lightItalicRoboto: any;
    mediumRoboto: any;
    mediumItalicRoboto: any;
    regularRoboto: any;
    thinRoboto: any;
    thinItalicRoboto: any;
};

type FontSizeTypes = {
    H1: number;
    H2: number;
    H3: number;
    H4: number;
    P: number;
    FS18: number;
    FS14: number;
    FS13: number;
    FS15: number;
    FS16: number;
    FS6: number;
    FS11: number;
    FS7: number;
    FS10: number;
    FS8: number;
    FS20: number;
    FS22: number;
    FS24: number;
    FS26: number;
    FS28: number;
    FS30: number;
};

const fonts: FontFamilyTypes = {
    REGULAR: Platform.select({
        android: "Almarai-Regular",
        ios: "Almarai-Regular",
    }),
    EXTRA_BOLD: Platform.select({
        android: "Almarai-ExtraBold",
        ios: "Almarai-ExtraBold",
    }),
    BOLD: Platform.select({ android: "Almarai-Bold", ios: "Almarai-Bold" }),
    LIGHT: Platform.select({ android: "Almarai-Light", ios: "Almarai-Light" }),
    MEDIUM: "",
    // black: "SofiaW03-Black",
    // blackItalic: "SofiaW03-BlackItalic",
    // bold: "SofiaW03-Bold",
    // boldItalic: "SofiaW03-BoldItalic",
    // light: "SofiaW03-Light",
    // lightItalic: "SofiaW03-LightItalic",
    // medium: "SofiaW03-Medium",
    // mediumItalic: "SofiaW03-MediumItalic",
    // regular: "SofiaW03-Regular",
    // italic: "SofiaW03-RegularItalic",
    // thin: "SofiaPro-Thin",
    // thinItalic: "SofiaPro-ThinItalic",
    blackRoboto: "Roboto-Black",
    blackItalicRoboto: "Roboto-BlackItalic",
    boldRoboto: "Roboto-Bold",
    boldItalicRoboto: "Roboto-BoldItalic",
    italicRoboto: "Roboto-Italic",
    lightRoboto: "Roboto-Light",
    lightItalicRoboto: "Roboto-LightItalic",
    mediumRoboto: "Roboto-Medium",
    mediumItalicRoboto: "Roboto-MediumItalic",
    regularRoboto: "Roboto-Regular",
    thinRoboto: "Roboto-Thin",
    thinItalicRoboto: "Roboto-ThinItalic",
};

const fontSizes: FontSizeTypes = {
    H1: scale(22),
    H2: scale(16),
    H3: scale(12),
    H4: scale(9),
    P: scale(12),
    FS18: scale(18),
    FS14: scale(14),
    FS15: scale(15),
    FS16: scale(16),
    FS20: scale(20),
    FS22: scale(22),
    FS24: scale(24),
    FS26: scale(26),
    FS28: scale(28),
    FS30: scale(30),
    FS6: scale(6),
    FS11: scale(11),
    FS7: scale(7),
    FS10: scale(10),
    FS13: scale(13),
    FS8: scale(8),
};

export { fonts, fontSizes };
export type { FontSizeTypes, FontFamilyTypes };
