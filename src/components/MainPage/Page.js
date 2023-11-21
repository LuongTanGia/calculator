import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import ErrorPath from "../error/ErrorPath";
import Login from "./auth/Login";

function Pages() {
  const isLogged = localStorage.getItem("firstLogin");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={isLogged ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<ErrorPath />} />
    </Routes>
  );
}

export default Pages;
