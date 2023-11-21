import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "../../MainPage/Page";
import { DataProvider } from "../../../GlobalState";
import SideBar from "../sideBar/SideBar";
// import "./App.css";
import "./home.css";
function Home() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <SideBar />
          <MainPage />
        </div>
      </Router>
    </DataProvider>
    // <div className="ellipse-Chart">
    //   {/* <Ellipse dataChart={50} color={`orange`} /> */}
    //   {/* <Ellipse dataChart={75} color={`green`} />
    //   <Ellipse dataChart={15} color={`blue`} /> */}

    //   {/* <LoginNew /> */}
    // </div>
  );
}

export default Home;
// dataChart, color;
