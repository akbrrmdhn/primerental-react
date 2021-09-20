import { postLogin } from "../../utils/https/auth";
import { signIn, signedIn } from "./actionString";

export const loginAction = (body, cb) => {
    return {
        type: signIn,
        payload: postLogin(body),
    };
};

export const loggedInAction = () => {
    return {
      type: signedIn,
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