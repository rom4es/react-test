import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue } from '../../actions';
import { colors } from '../../helpers';
import './filter.css';

export const Filter = () => {

  const filter = useSelector((state) => state.products.filter);
  const dispatch = useDispatch();
  
  return (
    <div className="b-filter">
      <div className="b-filter-row">
        <span>Цвет: </span>
        <div className="b-select">
          <select onChange={e => dispatch(changeFilterValue({ color: Number(e.target.value) }))}>
            <option value="0">Все</option>
            {colors.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
          </select>
        </div>
      </div>
      <div className="b-filter-row">
        <span>Цена от: </span>
        <div className="b-input">
          <input
            type="text"
            value={filter.minPrice}
            onChange={e => dispatch(changeFilterValue({ minPrice: e.target.value }))} />
        </div>
      </div>
      <div className="b-filter-row">
        <span>Цена до: </span>
        <div className="b-input">
          <input
            type="text"
            value={filter.maxPrice}
            onChange={e => dispatch(changeFilterValue({ maxPrice: e.target.value }))} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
