import { useParams } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import Electronics from "../pages/Electronics";
import Jewelry from "../pages/Jewelry";
import MenClothing from "../pages/MenClothing";
import WomenClothing from "../pages/WomenClothing";

const CategoryPage = () => {
  const { category } = useParams();

  switch (category) {
    case "jewelery":
      return <Jewelry />;
    case "men's clothing":
      return <MenClothing />;
    case "women's clothing":
      return <WomenClothing />;
    case "electronics":
      return <Electronics />;
    default:
      return <AllProducts />;
  }
};

export default CategoryPage;
