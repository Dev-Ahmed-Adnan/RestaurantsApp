import { store } from "../redux/store/configureStore";

export const getState = () => {
    return store.getState();
};
