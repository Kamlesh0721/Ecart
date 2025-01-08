import { React, useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "../../../data/productData";

const ProductList = () => {
  return (
    <Grid2 container spacing={3}>
      {products.map((product) => (
        <Grid2 item xs={12} sm={4} md={3} key={product.id}>
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
