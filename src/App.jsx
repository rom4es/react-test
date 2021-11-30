import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import ProductList from './components/productList/productList';
import { NavLink } from 'react-router-dom';

function App() {

  const products = useSelector((state) => state.products.data);
  const productsCount = 4;

  return (
    <>
      <h2>Топ товары</h2>
      <ProductList products={products.slice(0, productsCount)} />
      <NavLink to="/catalog" className="btn">Все товары</NavLink>
    </>
  );
}

export default App;
