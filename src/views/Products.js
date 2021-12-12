import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import constants from "../modules/constants";

function Products() {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setList(json))
    }, [])

    let { url } = useRouteMatch()

    return (
        <div className="products">
            <h1>Products</h1>
            <ul>
                {list?.map(elem => <li key={elem.id}>
                    <Link to={`${url}/${elem.id}`}>{elem.title}</Link>
                    <img src={elem.image} alt={elem.title}></img>
                    <h3>{elem.price}$</h3>
                    <Button action={true} productId={elem.id} btn_name={constants.button.add_item} />
                    <Button action={false} productId={elem.id} btn_name={constants.button.remove_item} />
                </li>)}
            </ul>
        </div>
    );
}

export default Products;