import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: 240 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={product.image}
            alt="green iguana"
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductCard;
