import { BrowserRouter, Switch, Route } from "react-router-dom";
import Context from './context'
import { useState } from "react";

import './App.css';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import Home from "./views/Home";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import Products from "./views/Products";
import ProductsDetails from "./views/ProductsDetails";

!localStorage.getItem('cart') && localStorage.setItem('cart', '');

const routs = [
  { path: '/', exact: true, component: Home },
  { path: '/products', exact: true, component: Products },
  { path: '/products/:productId', exact: true, component: ProductsDetails },
  { path: '/cart', exact: true, component: Cart },
  { component: NotFound }
]

function App() {
  const [cart, setCart] = useState([])
  return (
    <Context.Provider value={{cart, setCart}}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            {routs.map((elem, i) => {
              return <Route key={i} path={elem.path} exact={elem.exact} component={elem.component} />
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
