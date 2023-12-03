import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "@/Data/mens_kurta";
import { mensPantsPage1 } from "@/Data/mens_pants";
import { mens_shoes } from "@/Data/mens_shoes";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="bg-white space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel Data={mens_kurta} sectionName={"Man's Kurta"} />
        <HomeSectionCarousel Data={mensPantsPage1} sectionName={"Man's Shirts"} />
        <HomeSectionCarousel Data={mens_shoes} sectionName={"Man's Shoes"} />
        <HomeSectionCarousel Data={mens_shoes} sectionName={"Women's Dress"} />
        <HomeSectionCarousel Data={mens_shoes} sectionName={"Women's Saree"} />
      </div>
    </div>
  );
};

export default HomePage;
