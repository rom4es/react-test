import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addProduct } from "../actions";
import Product from "../components/product/product";
import { getColorName, getProductByID } from "../helpers";

export const ProductPage = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);
    const product = getProductByID(products, Number(params.id));

    return (
        <>
            <h2>{product.name}</h2>
            <br />
            <p>{product.description}</p>
            <br />
            <p>Цвет: {getColorName(product.color)}</p>
            <p>Цена: {product.price} руб.</p>
            <button onClick={() => dispatch(addProduct(product.id))}>В корзину</button>
        </>
    );
}

export default ProductPage;