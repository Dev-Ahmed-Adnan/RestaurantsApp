export interface ApisTypes<T = string> {
    login: T;
}

const APIs: ApisTypes = {
    login: "auth/login",
};

export default APIs;
