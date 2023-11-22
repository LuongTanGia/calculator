import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
// import "./App.css";
import "./home.css";
function Home() {
  return (
    <div className="HomePage">
      {/* SideBar sẽ hiển thị trên tất cả các trang con của Home */}
      <SideBar />

      {/* Nội dung của trang chính */}
      <div className="main-content">
        <Routes>
          {/* <Route path="/" element={<h1>Trang chủ</h1>} /> */}
          {/* <Route path="/other-page" element={ } />
          <Route path="/another-page" element={<AnotherPage />} /> */}
        </Routes>
      </div>
    </div>

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
