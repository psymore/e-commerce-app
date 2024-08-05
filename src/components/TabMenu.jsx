import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import useProductStore from "../store/productStore";
import { Link } from "react-router-dom";

const TopMenu = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const { categories, fetchCategories } = useProductStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container mt={2} sx={{}}>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All Products" component={Link} to={"/"} />

          {categories.map((category, i) => (
            <Tab
              key={i}
              sx={{
                textTransform: "uppercase",
                ml: i === 0 ? 2 : 0,
              }}
              component={Link}
              to={`/${category.toLowerCase()}`}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {category}
                </Box>
              }
              onClick={handleClick}
            />
          ))}
        </Tabs>
      </Box>
    </Grid>
  );
};

export default TopMenu;
