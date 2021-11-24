import { postLogin, postRegister, deleteLogout } from "../../utils/https/auth";
import { postUpdateProfile } from "../../utils/https/users";
import { signIn, signedIn, signOut, signUp, editUser } from "./actionString";

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
  

export const registerAction = (body, cb) => {
    return {
        type: signUp,
        payload: postRegister(body),
    };
};

export const logoutAction = token => {
    return {
        type: signOut,
        payload: deleteLogout(token),
    };
};

export const updateUserData = (body, token) => {
    return {
        type: editUser,
        payload: postUpdateProfile(body, token),
    }
}