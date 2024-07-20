import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <a href="http://localhost:5173/">
            <img src={product.image} className="logo" alt="Vite logo" />
          </a>
        </div>
      ))}
    </>
  );
}

export default App;
