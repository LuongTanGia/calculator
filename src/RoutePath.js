import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage/Page";
import { DataProvider } from "./GlobalState";
import SideBar from "./components/MainPage/sideBar/SideBar";
import "./App.css";

function RouterPath() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <SideBar />
          <MainPage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default RouterPath;
