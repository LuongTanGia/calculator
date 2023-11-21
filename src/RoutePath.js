import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage/Page";
import { DataProvider } from "./GlobalState";
import SideBar from "./components/MainPage/sideBar/SideBar";
import "./App.css";
// import LoginPage from "./components/MainPage/auth/Login";
// import { GlobalState } from "./GlobalState";

function RouterPath() {
  const isLogged = localStorage.getItem("firstLogin");
  return (
    <DataProvider>
      <Router>
        <div className="App">
          {isLogged ? <SideBar /> : null}
          <MainPage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default RouterPath;
