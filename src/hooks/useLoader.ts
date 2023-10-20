import { useSelector } from "react-redux";
import { ApisTypes } from "../redux/api/APIs";
import { RootState } from "../redux/store/configureStore";

export const useLoader = (type: keyof ApisTypes) => {
    const isLoading: boolean = useSelector<RootState, boolean>(
        state => state.loadingReducer[type] || false,
    );

    return isLoading;
};
