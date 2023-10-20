import { ApiResponse } from "apisauce";
import { LoginTypes, UserResponseTypes } from "../../@types";
import { logout, setUserProfile } from "../reducers/userReducer";
import { dispatch } from "../store/configureStore";
import { request } from "../api/request";

export function login(
    body: LoginTypes,
    callback?: (res: ApiResponse<UserResponseTypes>) => void,
) {
    dispatch(async () => {
        const response = await request<UserResponseTypes, LoginTypes>({
            method: "post",
            endPoint: "login",
            callback,
            body,
        });
        if (response) {
            setUserProfile(response);
        }
    });
}
export function logoutUser() {
    logout();
}
