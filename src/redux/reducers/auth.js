import { signIn } from "../actionCreators/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    authInfo: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    error: {},
};

const authReducer = (prevState = initialState, action) => {
    const { Pending, Fulfilled, Rejected } = ActionType;
    switch(action.type) {
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
            localStorage.setItem("userToken", action.payload.data.result.token);
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                error: action.payload.data.result,
            };    
        default:
            return prevState;
    }
};

export default authReducer;