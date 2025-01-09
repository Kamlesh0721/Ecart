import React from "react";

import UserRouter from "./Routers/UserRouter";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </>
  );
}

export default App;
