import reducerCounter from "./counter/reducer";
import reducerProducts from "./cart/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counter: reducerCounter,
    products: reducerProducts
})

export default rootReducer;