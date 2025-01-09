import React from "react";

import Home from "../user/pages/Home";

import MainCarousel from "../user/components/home/MainCarousel";
import CategoryCarousel from "../user/components/home/CategoryCarousel";

import { Routes, Route } from "react-router-dom";
import NavigationMenu from "../user/components/header/NavigationMenu";
function UserRouter() {
  return (
    <div>
      <>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<MainCarousel />} />
          <Route path="/" element={<CategoryCarousel />} />
        </Routes>
      </>
    </div>
  );
}

export default UserRouter;
