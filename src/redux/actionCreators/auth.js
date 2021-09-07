import { signIn } from "./actionString";

export const loginAction = (body, cb) => {
    return {
        type: signIn,
    };
};

export const registerAction = () => {
    return {
        type: "ACTION_REGISTER"
    };
};

export const logoutAction = () => {
    return {
        type: "ACTION_LOGOUT"
    };
};