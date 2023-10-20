import { useAppSelector } from "./useAppSelector";

export const useToken = () => useAppSelector(state => state.userReducer?.token);
