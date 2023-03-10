import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import BikeListing from "../pages/BikeListing";
import BikeReserve from "../pages/BikeReserve";
import NotFound from "../pages/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bikes" element={<BikeListing />} />
      <Route path="/bikes/:slug" element={<BikeReserve />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
