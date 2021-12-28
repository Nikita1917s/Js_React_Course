import { Link } from "react-router-dom";
import Button from "../components/Button";
import constants from "../modules/constants";
import { useSelector } from "react-redux";

function Cart() {

    let cart = useSelector(state => state.products.cart)

    const calcPrice = (() => {
        let sum = 0;

        cart.forEach(element => {
            sum += (element.price * element.amount)
        });
        return sum.toFixed(2)
    })

    return (
        <div className="cart">
            <h1>Cart</h1>
            <h1>Sum: {calcPrice()}$</h1>

            <ul className="cartItems">
                {cart.length ? cart?.map(elem => <li key={elem.id}>
                    <h3>Amount: {elem.amount}</h3>
                    <img src={elem.image} alt={elem.title}></img>
                    <Link to={`../products/${elem.id}`}>{elem.title}</Link>
                    <h3> All Items Price {(elem.price * elem.amount).toFixed(2)} $</h3>
                    <h3>Item Price {elem.price}$</h3>
                    <div className="cartBTN">
                        <Button action={true} productId={{ id: elem.id, title: elem.title, image: elem.image, price: elem.price }} btn_name={constants.button.add_item} />
                        <Button action={false} productId={{ id: elem.id, title: elem.title, image: elem.image, price: elem.price }} btn_name={constants.button.remove_item} />
                    </div>
                </li>) : <h2>You didn't buy anything yet...</h2>}
            </ul>
        </div>
    );
}

export default Cart;