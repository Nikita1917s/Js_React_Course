import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import constants from "../modules/constants";

function ProductsDetails() {
    const { productId } = useParams()
    const [data, setData] = useState({})

    useMemo(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [productId])

    let { title = '', image = '', description = '', price = '' } = data

    return (
        <div className="products-details">
            <h1>User {title}</h1>
            <img src={image} alt="" />
            <h3>{price}$</h3>
            <p>{description}</p>
            <Button action={true} productId={{ id: +productId, title: title, image: image, price: price }} btn_name={constants.button.add_item} />
            <Button action={false} productId={{ id: +productId, title: title, image: image, price: price }} btn_name={constants.button.remove_item} />
        </div>
    );
}

export default ProductsDetails;