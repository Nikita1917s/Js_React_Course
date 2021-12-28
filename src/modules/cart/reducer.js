import {ADD_TOCART, MORE_PRODUCTS} from "./type";
const defaultState = {
    products: [],
    cart: []
}

const reducerProducts = (state = defaultState, action) => {
    switch (action.type){
            case ADD_TOCART:
            return {...state, cart: action.payload}
            case MORE_PRODUCTS:
            return {...state, products: [...action.payload]}
        default:
            return state
    }
}

export const moreProductsAction = (payload) => ({type: MORE_PRODUCTS, payload})

export default reducerProducts;