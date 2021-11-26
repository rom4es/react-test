import React, {useState} from 'react';
import { IProduct } from '../../App';
import './product.css';

interface IProductProps {
  data: IProduct;
}

export const Product: React.FC<IProductProps> = ({data}) => {

  return (
    <div className="b-product">
      <div className="fake-img"></div>
      <div className="name">{data.name}</div>
      <div className="color">Цвет: {data.color}</div>
      <div className="price">{data.price} руб.</div>
    </div>
  );
}

export default Product;
