import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import constants from "../modules/constants";

function Cart() {
    const [cartStore, setCart] = useState((localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])
    const [list, setList] = useState([])
    const [list2, setList2] = useState(0)

    useMemo(() => {
        let data = []
        cartStore.map(elem => (

            fetch(`https://fakestoreapi.com/products/${elem.id}`)
                .then(res => res.json())
                .then(json => data.push(json))
        ))
        setList(data)
    }, [])


    return (

        <div className="cart">
            <h1>Cart</h1>
            <button onClick={() => (setList2(list2 + 1))}>Update List</button>
            <ul className="cartItems">
                {list.length ? list?.map(elem => <li key={elem.id}>
                    <img src={elem.image} alt={elem.title}></img>
                    <Link to={`../products/${elem.id}`}>{elem.title}</Link>
                    <h3>{elem.price}$</h3>
                    <Button action={true} productId={elem.id} btn_name={constants.button.add_item} />
                    <Button action={false} productId={elem.id} btn_name={constants.button.remove_item} />
                </li>) : <h2>You didn't buy anything yet...</h2>}
            </ul>
        </div>
    );
}

export default Cart;