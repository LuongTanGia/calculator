import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage/Page";
import { DataProvider } from "./GlobalState";

function RouterPath() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <MainPage />
        </div>
      </Router>
    </DataProvider>
  );
}

export default RouterPath;
