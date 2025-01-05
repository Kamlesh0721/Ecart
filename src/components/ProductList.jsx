import { React, useContext, useEffect, useState } from "react";
import AppContext from "../context/Context";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import axios from "../axios";

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

  // const handleAddToCart = (productId) => {
  //   console.log(`Product ${productId} added to cart.`);
  // };
  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     const fetchImagesAndUpdateProducts = async () => {
  //       const updatedProducts = await Promise.all(
  //         data.map(async (product) => {
  //           try {
  //             const response = await axios.get(
  //               `http://localhost:8080/api/product/${product.id}/image`,
  //               { responseType: "blob" }
  //             );
  //             const imageUrl = URL.createObjectURL(response.data);
  //             return { ...product, imageUrl };
  //           } catch (error) {
  //             console.error(
  //               "Error fetching image for product ID:",
  //               product.id,
  //               error
  //             );
  //             return { ...product, imageUrl: "placeholder-image-url" };
  //           }
  //         })
  //       );
  //       setProducts(updatedProducts);
  //     };

  //     fetchImagesAndUpdateProducts();
  //   }
  // }, [data]);
  return (
    <Grid container spacing={3}>
      {data.map((product) => (
        <Grid item xs={12} sm={4} md={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
