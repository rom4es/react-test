import React from 'react';
import './App.css';
import Product from './components/product/product';

export interface IProduct {
  id: number;
  name: string;
  price: number;
}


function App() {
  const data: IProduct[] = [
    {
      id: 123,
      name: 'Футболка',
      price: 1000,
    },
    {
      id: 300,
      name: 'Футболка',
      price: 1000,
    },
    {
      id: 1345,
      name: 'Футболка',
      price: 1000,
    },
  ];

  const GetData = () => data.map(item => <Product key={item.id} data={item} />);

  return (
    <div>
      {GetData()}
    </div>
  );
}

export default App;
