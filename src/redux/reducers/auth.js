import {
  signIn,
  signedIn,
  signOut,
  editUser,
} from "../actionCreators/actionString";
import { ActionType } from "redux-promise-middleware";

const localAuthInfo = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  authInfo: localAuthInfo ? localAuthInfo : {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogin: localAuthInfo ? true : false,
  error: {},
};

const authReducer = (prevState = initialState, action) => {
  const { Pending, Fulfilled, Rejected } = ActionType;
  switch (action.type) {
    case signIn.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case signIn.concat("_", Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: false,
        error: action.payload,
      };
    case signIn.concat("_", Fulfilled):
      localStorage.setItem("token", action.payload.data.result.token);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.data.result.userInfo)
      );
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result.userInfo,
        isLogin: true,
        error: action.payload.data.result,
      };
    case signedIn:
      return {
        ...prevState,
        authInfo: JSON.parse(localStorage.getItem("userInfo")),
        isLogin: true,
      };
    case signOut.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case signOut.concat("_", Rejected):
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case signOut.concat("_", Fulfilled):
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
        isLogin: false,
      };
    case editUser.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case editUser.concat("_", Rejected):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: false,
        isRejected: true,
        error: action.payload,
      };
    case editUser.concat("_", Fulfilled):
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
      };
    default:
      return prevState;
  }
};

export default authReducer;
