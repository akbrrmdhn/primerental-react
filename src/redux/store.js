import { createStore } from 'redux';
import { countUp, countDown } from './actionCreators/actionString';


const defaultState = {
    number: 0,
    isLoggedIn: false,
}

const reducer = (prevState = defaultState, action) => {
    //COUNT_UP COUNT_DOWN
    switch (action.type){
        case countUp:
            return{
                ...prevState,
                number: prevState.number + 1,
            };
        case countDown:
            return {
                ...prevState,
                number: prevState.number - 1,
            };
        default:
            return prevState;
    };
};

const reduxStore = createStore(reducer);

export default reduxStore;