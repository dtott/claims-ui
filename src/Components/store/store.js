import { configureStore } from '@reduxjs/toolkit'

const initialState = { user:{username : "", password: "", role : "", name : ""}};

const claimsReducer = (state = initialState, action) => {

if(action.type === "login") {
    return {...state, user: action.value}
}else if (action.type === "logout"){
    return {...state, user: {username: "", password: "", role: "", name: ""}}
}else {
    console.log("unknown redux action " + action.type);
    return state;
}

}

const claimStore = configureStore({reducer : claimsReducer});

export default claimStore;