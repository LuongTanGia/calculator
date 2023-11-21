import React from "react";
import "./gauge.css";

const KPIGauge = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: 98,
          height: 98,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#F2F2F2",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          width: 98,
          height: 98,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#A162F7",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          width: 80,
          height: 80,
          left: 9,
          top: 9,
          position: "absolute",
          background: "#F2F2F2",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          width: 80,
          height: 80,
          left: 9,
          top: 9,
          position: "absolute",
          background: "#FF6370",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          width: 64,
          height: 64,
          left: 17,
          top: 17,
          position: "absolute",
          background: "#F2F2F2",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          width: 64,
          height: 64,
          left: 17,
          top: 17,
          position: "absolute",
          background: "#F6CC0D",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          left: 32,
          top: 37,
          position: "absolute",
          color: "#242731",
          fontSize: 18,
          fontFamily: "DM Sans",
          fontWeight: "700",
          wordWrap: "break-word",
        }}>
        $811
      </div>
    </div>
  );
};

export default KPIGauge;
