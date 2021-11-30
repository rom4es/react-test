import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductByID } from "../helpers";

export const BasketPage = () => {

    const products = useSelector((state) => state.products.data);
    const basket = useSelector((state) => state.basket.data);

    const getbasket = () => {
        return basket.map((item) => {
            const product = getProductByID(products, item.id);
            return (
                <li>
                    <NavLink to={`/catalog/${product.id}`}>{product.name}</NavLink>,
                    <span>{item.quantity} шт.</span>,
                    {product.price * item.quantity} руб.
                </li>
            )
        });
    }

    const getTotalPrice = () => {
        return basket.reduce((sum, item) => {
            const product = getProductByID(products, item.id);
            return sum + (product.price * item.quantity);
        }, 0);
    }

    return (
        <>
            <h2>Товары в корзине</h2>
            <ul> {getbasket()} </ul>
            <h3>Итого: {getTotalPrice()} руб. </h3>
        </>
    );
}

export default BasketPage;