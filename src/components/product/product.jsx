import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions';
import './product.css';

export const Product = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="b-product">
      <div className="fake-img"></div>
      <div className="name">{props.data.name}</div>
      <div className="color">Цвет: {props.data.color}</div>
      <div className="price">{props.data.price} руб.</div>
      <button onClick={() => dispatch(addProduct(props.data.id))}>В корзину</button>
    </div>
  );
}

export default Product;
