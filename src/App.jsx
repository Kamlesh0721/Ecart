import React from "react";
import NavigationMenu from "./user/components/header/NavigationMenu";
import Home from "./user/pages/Home";
import CategoryFilter from "./user/pages/CategoryFilter";
import Footer from "./user/components/footer/Footer";
import ProductDetails from "./user/pages/ProductDetails";
import Cart from "./user/components/cart/Cart";
function App() {
  return (
    <>
      {/* <NavigationMenu />
      <Home />
      <CategoryFilter />

      <Footer />
      <ProductDetails /> */}
      <Cart />
    </>
  );
}

export default App;
