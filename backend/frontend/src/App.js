import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // ใช้ HashRouter
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;