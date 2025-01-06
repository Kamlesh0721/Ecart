import React from "react";
import MainCarousel from "../components/home/MainCarousel";
import CategoryCarousel from "../components/home/CategoryCarousel";
import { categoryData } from "../../data/categoryData";
function Home() {
  return (
    <>
      <main>
        <MainCarousel />
        <CategoryCarousel
          products={categoryData.mensKurta}
          category={"Men's Kurta"}
        />
        <CategoryCarousel
          products={categoryData.mensKurta}
          category={"Men's Kurta2"}
        />
      </main>
    </>
  );
}

export default Home;