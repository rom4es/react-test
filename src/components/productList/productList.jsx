import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../filter/filter';
import Product from '../product/product';
import './productList.css';

const getProductItems = (products, filter) => {
  const result = products.filter(item => {
    let valid = true;
    if (filter.color > 0 && item.color != filter.color) {
      valid = false
    }
    if (filter.minPrice && item.price < filter.minPrice) {
      valid = false
    }
    if (filter.maxPrice && item.price > filter.maxPrice) {
      valid = false
    }
    if (valid) {
      return item;
    }
  });
  return result.map(item => <Product key={item.id} data={item} />);
};

export const ProductList = (props) => {

  const filter = useSelector((state) => state.products.filter);

  return (
    <div className="b-products">
      <Filter />
      <div className="b-product-list">
        {getProductItems(props.products, filter)}
      </div>
    </div>
  );
}

export default ProductList;
