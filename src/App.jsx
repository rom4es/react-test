import React from 'react';
import { useSelector } from 'react-redux'
import './reset.css';
import './App.css';
import Filter from './components/filter/filter';
import Menu from './components/menu/menu';
import MiniBasket from './components/miniBasket/miniBasket';
import Product from './components/product/product';
import ProductList from './components/productList/productList';

function App() {

  const products = useSelector((state) => state.products.data);
  const basket = useSelector((state) => state.basket.data);

  return (
    <div className="page">
      <div className="b-header">
        <Menu />
        <MiniBasket products={products} basket={basket} />
      </div>
      <div className="b-content">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
