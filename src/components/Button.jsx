import { Button } from 'antd';
import { useContext } from "react";
import Context from '.././context'

const ButtonTest = ({ action, productId, btn_name }) => {

    const { cart, setCart } = useContext(Context)

    let addToCart = ((action, product) => {
        let storage = cart.length ? [...cart] : []

        if (searchID(storage, product.id) === -1 && action) {
            let data = [...storage, { id: product.id, title: product.title, image: product.image, price: product.price, amount: 1 }]
            setCart(data)
        } else {
            let data = [...cart]
            action ? data[searchID(data, product.id)]['amount']++ : (data[searchID(data, product.id)].amount > 1) ? data[searchID(data, product.id)]['amount']-- : data.splice((searchID(data, product.id)), 1)
            setCart([...data])
            console.log(data)
        }
    })

    let searchID = ((data, id) => data?.findIndex((elem) => elem.id === id))

    return <Button type="primary"
        onClick={() => (addToCart(action, productId))}>
        {btn_name}
    </Button>
}

export default ButtonTest;