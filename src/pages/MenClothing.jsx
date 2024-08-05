import { useEffect } from "react";
import ProductList from "../components/ProductList";
import useProductStore from "../store/productStore";
import { useParams } from "react-router-dom";

const MenClothing = () => {
  const { categoryProducts, fetchProductsByCategory } = useProductStore();

  const category = useParams().category;

  console.log(category);

  useEffect(() => {
    fetchProductsByCategory("men's clothing");
  }, []);

  return <ProductList products={categoryProducts} />;
};

export default MenClothing;
