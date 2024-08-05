import { useEffect } from "react";
import ProductList from "../components/ProductList";
import useProductStore from "../store/productStore";

const Electronics = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("electronics");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default Electronics;
