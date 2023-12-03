import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer w-full h-96  "
      role="presentation"
      src={item.Image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      disableDotsControls
      infinite
    />
  );
};

export default MainCarousel;
