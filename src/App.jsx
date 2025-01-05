import React from "react";
import NavigationMenu from "./user/components/NavigationMenu";
import Home from "./user/pages/Home";
import Footer from "./user/components/footer/Footer";
function App() {
  return (
    <>
      <NavigationMenu />
      <Home />
      <Footer />
    </>
  );
}

export default App;
