import {ADD_COUNTER, REMOVE_COUNTER} from "./type.js";

const defaultState = {
    counter: 0,
}

const reducerCounter = (state = defaultState, action) => {
    switch (action.type){
        case ADD_COUNTER:
            return {...state, counter: state.counter + action.payload}
        case REMOVE_COUNTER:
            return {...state, counter: state.counter - action.payload}
        default:
            return state
    }
}

export const addCounterAction = (payload) => ({type:ADD_COUNTER, payload})
export const removeCounterAction = (payload) => ({type:REMOVE_COUNTER, payload})

export default reducerCounter