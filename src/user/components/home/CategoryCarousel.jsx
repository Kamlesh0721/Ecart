import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardMedia } from "@mui/material";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        background: "black",
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        left: "10px",
        zIndex: 1,
      }}
    >
      {"<"}
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        background: "black",
        color: "white",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        right: "10px",
        zIndex: 1,
      }}
    >
      {">"}
    </button>
  );
};

function CategoryCarousel({ products, category }) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>{category}</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Card sx={{ maxWidth: 280 }}>
            <CardMedia
              key={index}
              component="img"
              height="300"
              image={product.imgUrl}
              alt={product.name || "Product Image"}
              sx={{
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
