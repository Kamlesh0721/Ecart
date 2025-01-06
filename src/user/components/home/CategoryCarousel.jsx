import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Typography } from "@mui/material";

const responsive = { 0: { items: 4 } };
const CategoryCarousel = ({ products, category }) => {
  const items = products.map((product) => {
    return <img src={product.imgUrl} />;
  });

  return (
    <>
      <Typography variant="h3">{category}</Typography>
      <AliceCarousel
        disableButtonsControls
        disableDotsControls
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};
export default CategoryCarousel;
