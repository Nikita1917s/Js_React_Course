import React from "react";

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            totalPrise: 0
        }
        this.purchase = this.purchase.bind(this)
    }

    purchase(key, title, price) {
        let newItem = { "key": key, "title": title, "price": price }
        //Check if item was added to cart
        let check = this.state.cart.findIndex((el) => {
            return el.key === newItem.key
        })

        if (check === -1) {
            //Add item and increase sum
            let added = this.state.cart.concat(newItem)
            // 'Number' and 'toFixed' used to work with correct amounts
            this.setState({
                cart: added,
                totalPrise: Number((this.state.totalPrise + price).toFixed(2))
            })
        } else {
            //Remove item and decrease sum
            this.state.cart.splice(check, 1)
            let added = this.state.cart
            // 'Number' and 'toFixed' used to work with correct amounts
            this.setState({
                cart: added,
                totalPrise: Number((this.state.totalPrise - price).toFixed(2))
            })
        }
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json
                })
            })
    }

    shouldComponentUpdate(prevState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        return true
    }


    static getDerivedStateFromProps(state, props) {
        return null
    }

    render() {
        const { products, cart } = this.state
        //Render Products list and Cart items
        return (
            <>
                <div className="info">
                    <div className="total">Total sum is: {this.state.totalPrise} $</div>
                    {cart.length ? cart.map((item, index) =>
                        <div key={item.key} className="infoCard">
                            <h1>№{index + 1}</h1>
                            <h3>{item.title}</h3>
                            <h4>Price: {item.price} $</h4>
                            <h2 onClick={(() => this.purchase(item.key, item.title, item.price))}>Remove</h2>
                        </div>) : <h4>You didn't buy anything yet...</h4>}
                </div>

                {products.length ? products.map((item, index) =>
                    <div key={item.id} className="item">
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <h4>Price: {item.price} $</h4>
                        <b onClick={(() => this.purchase(item.id, item.title, item.price))}>Buy / Remove</b>
                    </div>) : <p>Loading...</p>}
            </>
        )
    }
}

export default Work