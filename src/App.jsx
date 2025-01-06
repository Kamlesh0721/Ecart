import React from "react";
import NavigationMenu from "./user/components/header/NavigationMenu";
import Home from "./user/pages/Home";
import CategoryFilter from "./user/pages/CategoryFilter";
import Footer from "./user/components/footer/Footer";
function App() {
  const categories = ["Electronics", "Clothing", "Books", "Furniture", "Toys"];

  const handleFilterApply = (filteredCategories) => {
    console.log("Filtered Categories:", filteredCategories);
    // Use the filtered categories here (e.g., fetch or filter products)
  };
  return (
    <>
      <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello
        <br />
        World
      </span>
      <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello
        <br />
        World
      </span>
      <NavigationMenu />
      {/* <Home /> */}
      <h1>Category Filter</h1>
      <CategoryFilter
        categories={categories}
        onFilterApply={handleFilterApply}
      />
      <Footer />
    </>
  );
}

export default App;
