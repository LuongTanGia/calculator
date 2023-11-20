// CountdownLoader.js
import React, { useState, useEffect } from "react";
import "./Auth.css";

const CountdownLoader = ({ number }) => {
  const [countdown, setCountdown] = useState(number);

  useEffect(() => {
    const updateCountdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(updateCountdownInterval);
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(updateCountdownInterval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader" id="loader">
        {countdown}
      </div>
    </div>
  );
};

export default CountdownLoader;
