import { countDown, countUp } from "../actionCreators/actionString";

const defaultState = {
    number: 1,
};

const countReducer = (prevState = defaultState, action) => {
    switch (action.type){
        case countDown:
            if(prevState.number > 1)
            return {
                ...prevState,
                number: prevState.number - 1,
            };
            else return prevState;
        case countUp:
            return {
                ...prevState,
                number: prevState.number + 1,
            }
        default:
            return prevState;
    }
}

export default countReducer;