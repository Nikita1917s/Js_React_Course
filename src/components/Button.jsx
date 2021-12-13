import { Button } from 'antd';

const ButtonTest = ({ action, productId, btn_name }) => {

    let addToCart = ((action, product) => {
        let localStore = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];

        if (searchID(localStore, product.id) === -1) {
            let data = [...localStore, { id: product.id, title: product.title, image: product.image, price: product.price, amount: 1 }]
            localStorage.setItem('cart', JSON.stringify(data))
        } else {
            let data = JSON.parse(localStorage.getItem('cart'))
            action ? data[searchID(data, product.id)]['amount']++ : (data[searchID(data, product.id)].amount > 1) ? data[searchID(data, product.id)]['amount']-- : data.splice((searchID(data, product.id)), 1)
            localStorage.setItem('cart', JSON.stringify(data))
        }
    })

    let searchID = ((data, id) => data?.findIndex((elem) => elem.id === id))

    return <Button type="primary"
        onClick={() => (addToCart(action, productId))}>
        {btn_name}
    </Button>
}

export default ButtonTest;