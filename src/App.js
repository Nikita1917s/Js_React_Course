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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/products/:productId' component={ProductsDetails} />
          <Route path='/cart' component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
