const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 23
}

//Reducer
const  rootReducer = (state = initialState, action) => {
    console.log(action);
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatch Action
store.dispatch({type: 'ADD_AGE'})


//Subscription