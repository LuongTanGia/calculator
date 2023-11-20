import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import ErrorPath from "../error/ErrorPath";
import Login from "./auth/Login";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" index element={<Login />} />
      <Route path="*" element={<ErrorPath />} />
    </Routes>
  );
}

export default Pages;
