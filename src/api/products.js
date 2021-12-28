import { moreProductsAction } from "../modules/cart/reducer";
import constants from "../modules/constants";
import axios from "axios";

// export const fetchUsers = () => {
//     return function (dispatch) {
//         fetch(API.products)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 dispatch(moreUsersAction(json))
//             })
//     }
// }
export const fetchProducts = () => {
    return async (dispatch) => {
        const { data } = await axios.get(constants.API.products)
        dispatch(moreProductsAction(data))
    }
}