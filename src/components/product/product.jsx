import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProduct } from '../../actions';
import { getColorName } from '../../helpers';
import './product.css';

export const Product = (props) => {

  const dispatch = useDispatch();

  return (
    <div className="b-product">
      <div className="fake-img"></div>
      <NavLink to={`/catalog/${props.data.id}`}>{props.data.name}</NavLink>
      <div className="color">Цвет: {getColorName(props.data.color)}</div>
      <div className="price">{props.data.price} руб.</div>
      <button onClick={() => dispatch(addProduct(props.data.id))}>В корзину</button>
    </div>
  );
}

export default Product;
