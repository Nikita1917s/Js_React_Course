import { BrowserRouter, Switch, Route } from "react-router-dom";
// import {useEffect, useState} from "react";

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
  {path: '/', component: Home, exact:true},
  {path: '/products', component: Products, exact:true},
  {path: '/products/:productId', component: ProductsDetails, exact:true},
  {path: '/cart', component: Cart, exact:true},
  {component: NotFound}
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {routs.map((item) => {
            return <Route path={item.path} exact={item.exact} component={item.component} />
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <Route path='/' exact component={Home} />
<Route path='/products' exact component={Products} />
<Route path='/products/:productId' component={ProductsDetails} />
<Route path='/cart' component={Cart} />
<Route component={NotFound} /> */}