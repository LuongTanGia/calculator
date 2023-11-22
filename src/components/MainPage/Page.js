import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import ErrorPath from "../error/ErrorPath";
import Login from "./auth/Login";
import LoginTest from "../testComponent/LoginTest";

function Pages() {
  const isLogged = localStorage.getItem("firstLogin");
  // console.log(isLogged);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/loginTest" element={<LoginTest />} />

      <Route
        path="/"
        element={isLogged === "true" ? <Home /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={isLogged === "true" ? <ErrorPath /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default Pages;
