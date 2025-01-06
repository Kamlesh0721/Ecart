import { React, useContext, useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data, isError, refreshData } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      console.log("refreshing data");
      refreshData();
      setIsDataFetched(true);
    }
  }, [refreshData, isDataFetched]);

  return (
    <Grid2 container spacing={3}>
      {data.map((product) => (
        <Grid2 item xs={12} sm={4} md={3} key={product.id}>
          <ProductCard product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
