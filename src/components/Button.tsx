import { Button } from 'antd';

interface Props {
    action: boolean,
    productId: { id: string | number; title: string | number; image: string | number; price: string | number; }
    btn_name: string | number
}
// interface cartType extends Props {
//     product: string | number,
// }

const ButtonTest: React.FC<Props> = ({ action, productId, btn_name }) => {

    let addToCart = ((action: boolean, product: { id: string | number; title: string | number; image: string | number; price: string | number; }) => {
        let localStore = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart') || '') : [];

        if (searchID(localStore, product.id) === -1) {
            let data = [...localStore, { id: product.id, title: product.title, image: product.image, price: product.price, amount: 1 }]
            localStorage.setItem('cart', JSON.stringify(data))
        } else {
            let data = JSON.parse(localStorage.getItem('cart') || '')
            action ? data[searchID(data, product.id)]['amount']++ : (data[searchID(data, product.id)].amount > 1) ? data[searchID(data, product.id)]['amount']-- : data.splice((searchID(data, product.id)), 1)
            localStorage.setItem('cart', JSON.stringify(data))
        }
    })

    let searchID = ((data: any[], id: any) => data?.findIndex((elem: { id: any; }) => elem.id === id))

    return <Button type="primary"
        onClick={() => (addToCart(action, productId))}>
        {btn_name}
    </Button>
}

export default ButtonTest;