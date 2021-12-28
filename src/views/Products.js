import { Link, useRouteMatch } from "react-router-dom";
import Button from "../components/Button";
import constants from "../modules/constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../api/products";

function Products() {
    const dispatch = useDispatch()

    let products = useSelector(state => state.products.products)
    if(!products.length) {
        dispatch(fetchProducts())
    }

    let { url } = useRouteMatch()

    return (
        <div className="products">
            <h1>Products</h1>
            <ul>
                {products.length ? products?.map(elem => <li key={elem.id}>
                    <Link to={`${url}/${elem.id}`}>{elem.title}</Link>
                    <img src={elem.image} alt={elem.title}></img>
                    <h3>{elem.price}$</h3>
                    <Button action={true} productId={{ id: elem.id, title: elem.title, image: elem.image, price: elem.price }} btn_name={constants.button.add_item} />
                    <Button action={false} productId={{ id: elem.id, title: elem.title, image: elem.image, price: elem.price }} btn_name={constants.button.remove_item} />
                </li>) : <h2>Loading...</h2>}
            </ul>
        </div>
    );
}

export default Products;