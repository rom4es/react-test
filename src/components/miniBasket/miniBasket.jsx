import React from 'react';
import './miniBasket.css';

export const MiniBasket = (props) => {

  const getSum = () => {
    return props.basket.reduce(function(sum, item) {
      const product = props.products.find(product => product.id == item.id);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  return (
    <a href="#" className="mini-basket">Корзина | {getSum()} руб.</a>
  );
}

export default MiniBasket;
