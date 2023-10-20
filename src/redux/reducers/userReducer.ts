import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    ContactType,
    NotificationTypes,
    ResponseTypes,
    UserResponseTypes,
    UserTypes,
} from "../../@types";
import { dispatch } from "../store/configureStore";

export type PlaceTypes = {
    business_status: "OPERATIONAL";
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
        viewport: {
            northeast: {
                lat: number;
                lng: number;
            };
            southwest: {
                lat: number;
                lng: number;
            };
        };
    };
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    opening_hours: {
        open_now: boolean;
    };
    photos: Array<{
        height: number;
        html_attributions: [string];
        photo_reference: string;
        width: number;
    }>;
    place_id: string;
    plus_code: {
        compound_code: string;
        global_code: string;
    };
    price_level: number;
    rating: number;
    reference: string;
    scope: string;
    types: [
        "restaurant",
        "casino",
        "lodging",
        "bar",
        "food",
        "point_of_interest",
        "establishment",
    ];
    user_ratings_total: number;
    vicinity: string;
};
export type InitialUserSliceTypes = {
    profile?: UserTypes;
    places: Array<PlaceTypes>;
    token: string;
    contacts: ContactType[];
    notifications: Array<NotificationTypes>;
};

const initialState: InitialUserSliceTypes = {
    token: "",
    places: [],
    contacts: [],
    notifications: [],
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setContacts(
            state: InitialUserSliceTypes,
            action: PayloadAction<ContactType[]>,
        ) {
            return {
                ...state,
                contacts: action.payload.sort((a, b) =>
                    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
                ),
            };
        },
        setUserProfile(
            state: InitialUserSliceTypes,
            action: PayloadAction<UserResponseTypes>,
        ) {
            return {
                ...state,
                token: action.payload.data.token,
                profile: action.payload.data.user,
            };
        },
        setPlaces(
            state: InitialUserSliceTypes,
            action: PayloadAction<PlaceTypes[]>,
        ) {
            return {
                ...state,
                places: action.payload,
            };
        },
        setNotifications(
            state: InitialUserSliceTypes,
            action: PayloadAction<ResponseTypes<NotificationTypes[]>>,
        ) {
            return {
                ...state,
                notifications: action.payload.data,
            };
        },
        logout(state: InitialUserSliceTypes, action: PayloadAction) {
            return {
                ...state,
                profile: undefined,
                token: "",
                contacts: [],
                messages: [],
                notifications: [],
                places: [],
            };
        },
    },
});

export const logout = () => {
    dispatch(userSlice.actions.logout());
};

export const setUserProfile = (user: UserResponseTypes) => {
    dispatch(userSlice.actions.setUserProfile(user));
};
export const setContacts = (user: ContactType[]) => {
    dispatch(userSlice.actions.setContacts(user));
};
export const setNotifications = (data: ResponseTypes<NotificationTypes[]>) => {
    dispatch(userSlice.actions.setNotifications(data));
};
export const { setPlaces } = userSlice.actions;

export default userSlice.reducer;
