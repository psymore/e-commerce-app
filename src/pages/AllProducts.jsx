import { useEffect } from "react";
import ProductList from "../components/ProductList";
import useProductStore from "../store/productStore";

function AllProducts() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductList products={products} />;
}

export default AllProducts;
