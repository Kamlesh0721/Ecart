import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouseData } from "../../../data/mainCarouselData";

const items = mainCarouseData.map((item, index) => {
  const style = { height: 300 };
  return (
    <img
      className={`image${index}`}
      style={style}
      src={item.imgUrl}
      atl={item.imgDesc}
    />
  );
});

const MainCarousel = () => {
  return (
    <>
      <AliceCarousel
        disableButtonsControls
        autoPlay
        animationDuration={3000}
        infinite
        items={items}
      />
    </>
  );
};

export default MainCarousel;
