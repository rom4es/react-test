import React, {useState} from 'react';
import { IProduct } from '../../App';
import './product.css';

interface IProductProps {
  data: IProduct;
}

export const Product: React.FC<IProductProps> = props => {

  return (
    <p>{props.data.id}</p>
  );
}

export default Product;
