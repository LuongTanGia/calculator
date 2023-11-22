// Popup.js
import React, { useState } from "react";
import "./Auth.css";

const Popup = ({ res }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    localStorage.setItem("remoteDB", event.target.value);
  };

  const handleLogin = (e) => {
    if (localStorage.getItem("remoteDB") != null) {
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    }
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
              {res.dataResults ? (
                res.dataResults.map((item, index) => (
                  <div key={index}>
                    {item.remoteDB}{" "}
                    <input
                      type="radio"
                      value={item.remoteDB}
                      checked={selectedOption === item.remoteDB}
                      onChange={handleOptionChange}
                      name="remoteDB"
                    />
                  </div>
                ))
              ) : (
                <p className="error_login">* {res.dataErrorDescription} *</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleLogin();
                }}>
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
