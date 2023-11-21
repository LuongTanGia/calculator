import React from "react";
import "./util.css"; // Import file CSS để định dạng Ellipse
import { GlobalState } from "../../GlobalState";

const Ellipse = ({ dataChart, color }) => {
  return (
    <div className="flex-wrapper">
      {/* <h1>hello</h1> */}
      <div className="chart-content">
        <div className="single-chart">
          <svg viewBox="0 0 36 36" className={`circular-chart ${color}`}>
            <path
              className="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${dataChart}, 100`}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {dataChart}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Ellipse;
