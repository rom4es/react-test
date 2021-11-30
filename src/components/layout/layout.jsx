import React from 'react';
import { useSelector } from 'react-redux'
import '../../reset.css';
import './layout.css';
import { Outlet } from 'react-router';
import Menu from '../menu/menu';
import MiniBasket from '../miniBasket/miniBasket';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

function Layout() {

    const products = useSelector((state) => state.products.data);
    const basket = useSelector((state) => state.basket.data);

    return (
        <div className="page">
            <div className="b-header">
                <div className="b-header-top">
                    <Menu />
                    <MiniBasket products={products} basket={basket} />
                </div>
                <Breadcrumbs />
            </div>

            <div className="b-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
