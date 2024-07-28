import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import useProductStore from "../../store/productStore";

const TopMenu = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container mt={2} sx={{}}>
      <AppBar position="static" sx={{ border: "1px solid #71baf2" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tab menu">
          <Tab label="All Products" />

          {categories.map((category, i) => (
            <Tab
              key={i}
              sx={{
                textTransform: "uppercase",
                ml: i === 0 ? 2 : 0,
                // border: "1px dashed #71baf2",
              }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {category}
                </Box>
              }
              onClick={handleClick}
            />
          ))}
        </Tabs>
      </AppBar>
    </Grid>
  );
};

export default TopMenu;
