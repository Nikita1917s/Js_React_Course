import { Button } from 'antd';
//import { useMemo, useState } from "react";



const ButtonTest = ({ action, productId, btn_name }) => {

    let addToCart = ((action, id) => {
        let localStore = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];

        if (searchID(localStore, id) === -1) {
            let data = [...localStore, { id: id, amount: 1 }]
            localStorage.setItem('cart', JSON.stringify(data))
        } else {
            let data = JSON.parse(localStorage.getItem('cart'))
            action ? data[searchID(data, id)]['amount']++ : (data[searchID(data, id)].amount) ? data[searchID(data, id)]['amount']-- : data[searchID(data, id)]['amount'] = 0
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