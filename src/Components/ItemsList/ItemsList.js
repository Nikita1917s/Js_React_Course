import { useEffect, useState } from "react";

function ItemsList() {
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res => res.json())
            .then(json => setList(json))
    }, [])

    console.log(list)
    return (
        <div>
            <div className="products">
                <h1>Products</h1>
                <ul>
                    {list.length ? list?.map(elem => <li key={elem.id}>
                        <div className="title">
                            <h2>{elem.title}</h2>
                            <br></br>
                            <h3>{elem.description}</h3>
                        </div>

                        <img src={elem.image} alt={elem.title}></img>
                        {/* <h3>{elem.price}$</h3> */}
                    </li>) : <h2>Loading...</h2>}
                </ul>
            </div>
        </div>
    )
}

export default ItemsList