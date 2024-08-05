import { useEffect } from "react";
import ProductList from "../components/ProductList";
import useProductStore from "../store/productStore";

const WomenClothing = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("women's clothing");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default WomenClothing;
