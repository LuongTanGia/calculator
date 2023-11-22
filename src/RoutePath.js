import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage/Page";
import { DataProvider } from "./GlobalState";
import "./App.css";
// import LoginPage from "./components/MainPage/auth/Login";
// import { GlobalState } from "./GlobalState";

function RouterPath() {
  return (
    <DataProvider>
      <Router>
        <div className="">
          <MainPage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default RouterPath;
