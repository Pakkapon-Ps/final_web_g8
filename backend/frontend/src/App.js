import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;