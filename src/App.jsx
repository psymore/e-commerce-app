import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { cubicBezier, motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  console.log(products);

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

  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
  const hoverVariants = {
    hover: {
      scale: 1.05,

      transition: {
        duration: 0.5,
        type: "sping",
        ease: easing,
      },
    },
  };

  return (
    <Grid container spacing={2} mt={6} mb={6}>
      {products.map(product => (
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}>
          <motion.div variants={hoverVariants} whileHover="hover">
            <Paper
              sx={{
                padding: 10,
                background: "linear-gradient(to right, #fefe 0%, #71baf2 100%)",
                borderRadius: "16px",
                cursor: "pointer",
                // transition: "all 0.6s",
                ":hover": {
                  boxShadow: "0 0 12px white",
                  // borderRadius: "100px",
                },
              }}>
              <Grid item xs={12} key={product.id}>
                <a href="http://localhost:5173/">
                  <img
                    src={product.image}
                    className="logo"
                    alt={product.title}
                    style={{
                      maxWidth: "20vw",
                      maxHeight: "40vh",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
                </a>
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
