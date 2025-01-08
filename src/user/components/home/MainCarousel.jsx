import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouseData } from "../../../data/mainCarouselData";
import Slider from "react-slick";
const items = mainCarouseData.map((item, index) => {
  const style = { height: 300 };
  return (
    <img
      className={`image${index}`}
      style={style}
      src={item.imgUrl}
      alt={item.imgDesc}
    />
  );
});

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>{...items}</Slider>
      </div>
    </>
  );
};

export default MainCarousel;
