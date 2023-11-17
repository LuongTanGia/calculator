import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import ErrorPath from "../error/ErrorPath";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPath />} />
    </Routes>
  );
}

export default Pages;
