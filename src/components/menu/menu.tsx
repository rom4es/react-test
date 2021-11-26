import React from 'react';
import './menu.css';

export const Menu: React.FC = () => {
  return (
    <ul className="b-menu">
      <li><a href="#">Главная</a></li>
      <li><a href="#">Корзина</a></li>
    </ul>
  );
}

export default Menu;
