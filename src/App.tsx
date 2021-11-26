import React from 'react';
import './App.css';
import Filter from './components/filter/filter';
import Menu from './components/menu/menu';
import Product from './components/product/product';

export enum Color {
  White = 'Белый',
  Blue = 'Синий',
  Green = 'Зеленый',
  Black = 'Черный',
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  color: Color;
}

function App() {

  const GetData = () => data.map(item => <Product key={item.id} data={item} />);

  return (
    <div className="page">
      <Menu />
      <div className="b-content">
        <Filter />
        <div className="b-product-list">
          {GetData()}
        </div>
      </div>
    </div>
  );
}

export default App;
