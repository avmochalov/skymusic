import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
