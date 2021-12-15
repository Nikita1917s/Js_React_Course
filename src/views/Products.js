import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Context from '.././context'
import Button from "../components/Button";
import constants from "../modules/constants";

function Products() {
    const { cart } = useContext(Context)
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setList(json))
    }, [])

    let { url } = useRouteMatch()
    console.log(cart)
    return (
        <div className="products">
            <h1>Products</h1>
            <ul>
                {list.length ? list?.map(elem => <li key={elem.id}>
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