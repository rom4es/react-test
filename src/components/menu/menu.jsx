import React from 'react';
import { NavLink } from "react-router-dom";
import './menu.css';

export const Menu = () => {
  return (
    <ul className="b-menu">
      <li><NavLink to="/">Главная</NavLink ></li>
      <li><NavLink to="/catalog">Каталог</NavLink ></li>
      <li><NavLink to="/contacts">Контакты</NavLink ></li>
    </ul>
  );
}

export default Menu;
