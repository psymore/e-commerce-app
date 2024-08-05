import { useEffect } from "react";
import ProductList from "../components/ProductList";
import useProductStore from "../store/productStore";

const Jewelry = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchProductsByCategory("jewelery");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default Jewelry;
