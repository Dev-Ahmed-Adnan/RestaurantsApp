export type ColorsTypes = {
    PRIMARY: string;
    PRIMARY1: string;
    WHITE: string;
    BLACK: string;
    RED: string;
    BLUE: string;
    BLUE4849A1: string;
    LIGHT_GRAY1: string;
    Light_GRAY: string;
    GRAY737373: string;
    DARK_GRAY: string;
    GREEN: string;
    ORANGE: string;
    BORDER: string;
    BORDER2: string;
    GRAY5B5B5B: string;
    RGBA_BLACK: any;
    RGBA_WHITE: any;
    RGBA_BLUE: any;
    PRIMARY_GRADIENT: any;
    RGBA_GRAY: any;
    GRAY: any;
    GRAYE9E9E9: any;
    GRAYB1B1B1: any;
    GRAYF2F3F9: any;
    GRAYCFCFCF: string;
    GRAY707070: string;
    GRAY3E4A5973: string;
    GRAY959595: string;
    BLUE2: string;
    PRIMARY_BLUE: string;
    GREEN05C118: string;
    YELLOW: string;
    SECONDARY: string;
    PINK: string;
    BACKGROUND_GRAY: string;
    LIGHT_GREEN: string;
    PURPLE: string;
    GRAYECECEC: string;
    GRAYF4F5F7: string;
};

const Colors: ColorsTypes = {
    PRIMARY: "#7322A7",
    PRIMARY1: "#1E103A",
    WHITE: "#fff",
    BLACK: "#000",
    RED: "red",
    DARK_GRAY: "#1E1E1E",
    GREEN: "#23C117",
    ORANGE: "orange",
    GRAY: "#4f4f4f",
    GRAYE9E9E9: "#E9E9E9",
    GRAYB1B1B1: "#B1B1B1",
    GRAYF2F3F9: "#F2F3F9",
    GRAYCFCFCF: "#CFCFCF",
    GRAY707070: "#707070",
    GRAY3E4A5973: "#3E4A5973",
    GRAY959595: "#959595",
    GRAYECECEC: "#ECECEC",
    LIGHT_GRAY1: "#7E7E7E",
    GRAY737373: "#737373",
    BLUE: "#4466D2",
    BLUE4849A1: "#4849A1",
    BORDER: "#F2F3F9",
    BORDER2: "#CFD0D2",
    GRAY5B5B5B: "#5B5B5B",
    PRIMARY_GRADIENT: ["red", "blue"],
    RGBA_BLUE: (opacity: number) => `rgba(68, 146, 210,${opacity})`,
    RGBA_BLACK: (opacity: number) => `rgba(0,0,0,${opacity})`,
    RGBA_WHITE: (opacity: number) => `rgba(255,255,255,${opacity})`,
    RGBA_GRAY: (opacity: number) => `rgba(222, 220, 220,${opacity})`,
    Light_GRAY: "#B1B1B1",
    BLUE2: "#4849A1",
    PRIMARY_BLUE: "#25AAE1",
    GREEN05C118: "#05C118",
    YELLOW: "#F9C700",
    SECONDARY: "#F85A5B",
    PINK: "#DC5A72",
    BACKGROUND_GRAY: "#F9FBFF",
    LIGHT_GREEN: "#29CC9A",
    PURPLE: "#8056B9",
    GRAYF4F5F7: "#F4F5F7",
};

export default Colors;

export const RGBA_BLACK = (opacity: number) => `rgba(0,0,0,${opacity})`;
export const RGBA_WHITE = (opacity: number) => `rgba(255,255,255,${opacity})`;
