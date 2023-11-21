// Popup.js
import React, { useState } from "react";
import CountdownTimer from "./Loading";
import "./Auth.css";

const Popup = ({ res, number }) => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(res);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    localStorage.setItem("remoteDB", event.target.value);

    window.location.href = "/";
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Danh sach du lieu
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {res.dataResults
                ? res.dataResults.map((item, index) => (
                    <div key={index}>
                      {item.remoteDB}{" "}
                      <input
                        type="radio"
                        value={item.remoteDB}
                        checked={selectedOption === item.remoteDB}
                        onChange={handleOptionChange}
                      />
                    </div>
                  ))
                : null}
              {/* <CountdownTimer number={number} /> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
