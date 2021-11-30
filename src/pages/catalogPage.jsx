import { useSelector } from "react-redux";
import Filter from "../components/filter/filter";
import ProductList from "../components/productList/productList";

export const CatalogPage = () => {

    const products = useSelector((state) => state.products.data);

    return (
        <>
            <h2>Каталог</h2>
            <div className="b-products">
                <Filter />
                <ProductList products={products} />
            </div>
        </>
    );
}

export default CatalogPage;