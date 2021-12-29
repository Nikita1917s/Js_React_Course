import React from "react";


class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            text: '',
            modal: false,
            selectProduct: null,
            basket: [{}],
        }
        this.changeModal = this.changeModal.bind(this);
        this.selectedIdProduct = this.selectedIdProduct.bind(this);
        this.findProduct = this.findProduct.bind(this);
    }
    changeModal() {
        this.setState({
            modal: !this.state.modal
        })
    }
    selectedIdProduct(id) {
        this.findProduct(id)
        this.changeModal();
        this.setState({
            selectProduct: id
        })
    }
    findProduct(id) {
        const { basket } = this.state
        const filter = [...basket];
        filter.find(item => item.id === id);

        // basket.map(item => {
        //     console.log('test 0')
        //     if(item.id == id){
        //         console.log('test 1', ++item.count)
        //         return {id: id, count: ++item.count}
        //     } else {
        //         console.log('test 2')
        //         filter.push({id: id, count: 1})
        //     }
        // })
        basket.push({ id: id, count: 1 })
        console.log(filter)
        this.setState({
            basket: basket
        })
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
    render() {
        const { products, modal, selectProduct, basket } = this.state;
        console.log(basket)
        return (
            <>
                <CustomModal modal={modal} change={this.changeModal}>
                    <ProductDetails idProduct={selectProduct} />
                </CustomModal>
                {products.length ? products.map((item) =>
                    <ProductItem key={item.id} item={item} change={this.selectedIdProduct} />
                ) : <p>Loading...</p>
                }
            </>
        )
    }
}
export default Work;