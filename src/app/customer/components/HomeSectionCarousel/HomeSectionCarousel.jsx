import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "@/Data/mens_kurta";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    420: { items: 1.1 },
    540: { items: 2 },
    620: { items: 2.3 },
    720: { items: 3 },
    783: { items: 3 },
    1020: { items: 3.3 },
    1121: { items: 4 },
    1420: { items: 5.5 },
    1624: { items: 6.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = mens_kurta
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border p-3">
      <h1 className="text2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h1>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 6 && (
          <Button
            variant="contained"
            className="z-50 bg-white float-right"
            onClick={slideNext}
            sx={{
              postition: "absolute",
              top: "-12rem",
              transform: "translateX(80%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-lable="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="bg-white float-left"
            onClick={slidePrev}
            sx={{
              postition: "absolute",
              top: "-12rem",
              transform: "translateX(-80%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-lable="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
