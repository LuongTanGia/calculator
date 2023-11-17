import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import MainPage from "./components/MainPage/Page";

function RouterPath() {
  return (
    <Router>
      <div className="App">
        <App />
        <MainPage />
      </div>
    </Router>
  );
}

export default RouterPath;
