import { ApiResponse, CancelToken } from "apisauce";
import { CustomToast } from "../../helpers";
import { API } from ".";
import APIs, { ApisTypes } from "./APIs";
import { disableLoader, enableLoader } from "../reducers/loadingReducer";
import { dispatch, store } from "../store/configureStore";
import { RefObject } from "react";

type ApiMethodsTypes = "get" | "post" | "put" | "delete" | "patch";

// { isTrusted: false,
//     lengthComputable: [Getter/Setter],
//     loaded: [Getter/Setter],
//     total: [Getter/Setter] }

export type UploadProgressTypes = {
    isTrusted: boolean;
    lengthComputable: number;
    loaded: number;
    total: number;
};

export async function request<T, R = null>({
    method,
    endPoint,
    callback,
    body,
    params,
    onUploadProgress,
    setCancelToken,
}: {
    method: ApiMethodsTypes;
    endPoint: keyof ApisTypes;
    body?: R;
    callback?: (res: ApiResponse<T>) => void;
    params?: string;
    onUploadProgress?: (event: UploadProgressTypes) => void;
    setCancelToken?: any;
}) {
    const token = store.getState().userReducer.token;
    dispatch(enableLoader(endPoint));
    if (token) API.setHeader("Authorization", `${token}`);
    const res: ApiResponse<T & ErrorResponseType> = await API[method](
        `${APIs[endPoint]}${params ? params : ""}`,
        body ? body : {},
        {
            onUploadProgress,
            cancelToken: new CancelToken(function executor(c) {
                if (setCancelToken) setCancelToken(c);
            }),
        },
    );

    dispatch(disableLoader(endPoint));
    try {
        if (callback) callback(res);

        if (res.ok) return res.data;
        else handilErrors(res.data);
    } catch (e) {
        console.log("Request Error: ", e);
        CustomToast("Network error", "error");
    }
}

const handilErrors = (data: any) => {
    if (!data) return;

    let key = Object.keys(data)[0];
    if (typeof data[key] !== "string") {
        let key2 = Object.keys(data[key])[0];
        CustomToast(data[key][key2], "error");
    } else if (Array.isArray(data[key])) {
        CustomToast(data[key][0], "error");
    } else CustomToast(data.error || data.detail || data.details, "error");
};

type ErrorResponseType = {
    detail: string;
    code: "token_not_valid";
    messages: Array<{
        token_class: "AccessToken";
        token_type: "access";
        message: string;
    }>;
    message: string;
};
