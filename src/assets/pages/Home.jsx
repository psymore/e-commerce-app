import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { cubicBezier, motion } from "framer-motion";
import { useEffect } from "react";
import useProductStore from "../../store/productStore";
import { Box, Rating, Typography } from "@mui/material";

function Home() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.4, // Delay the fade-in of each item
        duration: 2, // Total duration of the animation
      },
    }),
  };

  return (
    <Grid container spacing={4} mt={6} mb={6} padding={4}>
      {products?.map((product, index) => (
        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          xs={12}
          key={product.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}>
          <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            whileHover="hover">
            <motion.div variants={hoverVariants} whileHover="hover">
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #71baf2",
                  padding: 5,
                  paddingBottom: 5,
                  // background:
                  //   "linear-gradient(to right, #152a3d 0%, #71baf2 100%)",
                  borderRadius: "16px",
                  cursor: "pointer",
                  ":hover": {
                    boxShadow: "0 0 12px white",
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
                <Grid item xs={12}>
                  <Typography variant="h6" component="div" gutterBottom mt={4}>
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    gutterBottom
                    mt={2}>
                    Price: ${product.price}
                  </Typography>
                  <Box mt={2} display={"flex"} alignItems={"center"}>
                    <Typography
                      mr={1}
                      variant="body2"
                      component="div"
                      display={"flex"}
                      alignItems={"center"}>
                      Rating:
                    </Typography>
                    <Rating
                      sx={{ display: "flex", alignItems: "center" }}
                      value={product.rating.rate}
                      readOnly
                      precision={0.1}
                    />
                    <Typography ml={1}>
                      ({product.rating.rate.toFixed(1)})
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="div" mt={1}>
                    Stock: {product.rating.count}
                  </Typography>
                </Grid>
              </Paper>
            </motion.div>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
