import { create } from "apisauce";
import { getAppLanguage } from "../../local/i18n";

export const onUploadProgress = (progress: any) => {};
export const API = create({
    onUploadProgress: onUploadProgress,
    baseURL: "https://newchatsock.creatbots.com/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": getAppLanguage(),
    },
});
API.addMonitor(() => {});
