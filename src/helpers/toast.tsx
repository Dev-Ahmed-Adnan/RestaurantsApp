import Toast, { BaseToast } from "react-native-toast-message";

export const CustomToast = (
    text: string,
    type: "error" | "success" | "info",
    text2?: string,
) => {
    Toast.show({
        type: type,
        text1: text2,
        position: "bottom",
        text2: text,
    });
};
