import { configureStore } from '@reduxjs/toolkit'

const initialState = { claimDetails : {}};

const claimsReducer = (state = initialState, action) => {

    if (action.type === "set-claim-to-edit"){
        return {...state, claimDetails : action.value}
    }

}

const claimStore = configureStore({reducer : claimsReducer});

export default claimStore;