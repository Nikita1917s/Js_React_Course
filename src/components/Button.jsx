import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";

const ButtonTest = ({ action, productId, btn_name }) => {

    const dispatch = useDispatch()
    let cart = useSelector(state => state.products.cart)

    let addToCart = ((action, product) => {
        let storage = cart.length ? [...cart] : []

        if (searchID(storage, product.id) === -1 && action) {
            console.log(storage)
            let data = [...storage, { id: product.id, title: product.title, image: product.image, price: product.price, amount: 1 }]
            dispatch({ type: "ADD_TOCART", payload: data })
        } else {
            let data = [...cart]
            action ? data[searchID(data, product.id)]['amount']++ : (data[searchID(data, product.id)].amount > 1) ? data[searchID(data, product.id)]['amount']-- : data.splice((searchID(data, product.id)), 1)
            dispatch({ type: "ADD_TOCART", payload: data })
        }
    })

    let searchID = ((data, id) => data?.findIndex((elem) => elem.id === id))


    return <Button type="primary"
        onClick={() => (addToCart(action, productId))}>
        {btn_name}
    </Button>
}

export default ButtonTest;

/*
const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const users = useSelector(state => state.users.users)
  const addCounter = (count) => {
    dispatch(addCounterAction(count))
  }
  const removeCounter = (count) => {
    dispatch(removeCounterAction(count))
  }
  const addUser = (name) => {
    const user = {
      id: Date.now(),
      title: name
    }
    dispatch({type: "ADD_USER", payload: user})
  }
  const removeUser = (id) => {
    dispatch({type: "REMOVE_USER", payload: id})
  }
    // moreUsersAction
  return (
    <div className="App">
      <h1>My counter: {counter}</h1>
      <div className="container">
        <button onClick={() => addCounter(10)}>Add Count</button>
        <button onClick={() => removeCounter(10)}>Remove Count</button>
      </div>
      <div className="container">
        {users.length           ? users.map(elem => <div onClick={() => removeUser(elem.id)} key={elem.id}>{elem.title}</div>)
          : <h3>Empty</h3>
        }
      </div>
      <div className="container">
        <button onClick={() => addUser(prompt('', 'Vasya'))}>Add User</button>
      </div>
      <div className="container">
          <button onClick={() => dispatch(fetchUsers())}>More Users</button>
      </div>
    </div>
  );

  */


      // let addToCart = ((action, product) => {
    //     let storage = cart.length ? [...cart] : []

    //     if (searchID(storage, product.id) === -1 && action) {
    //         let data = [...storage, { id: product.id, title: product.title, image: product.image, price: product.price, amount: 1 }]
    //         setCart(data)
    //     } else {
    //         let data = [...cart]
    //         action ? data[searchID(data, product.id)]['amount']++ : (data[searchID(data, product.id)].amount > 1) ? data[searchID(data, product.id)]['amount']-- : data.splice((searchID(data, product.id)), 1)
    //         setCart([...data])
    //         console.log(data)
    //     }
    // })

    // let searchID = ((data, id) => data?.findIndex((elem) => elem.id === id))