import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import axios from "axios";
import "./Auth.css";

function Login() {
  const [user, setUser] = useState({
    User: "",
    Pass: "",
  });

  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://isalewebapi.viettassaigon.vn/api/Auth/DanhSachDuLieu",
        { ...user }
      );

      if (res.data.tkn !== null) {
        localStorage.setItem("firstLogin", true);
        localStorage.setItem("userLogin", JSON.stringify(user));
      } else {
        localStorage.clear("userLogin");
      }

      // setNumber(60);

      setData(res.data);
      console.log(res);
    } catch (error) {
      if (error.response) {
        console.log(
          "Server responded with a non-2xx status",
          error.response.data
        );
        console.log("Status code:", error.response.status);
      } else if (error.request) {
        console.log("The request was made but no response was received");
      } else {
        console.log(
          "Something happened in setting up the request",
          error.message
        );
      }
    }
  };

  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from earning your own money!</p>
          {/* <input type="submit" name="" value="Login" /> */}
          <br />
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false">
                Register
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab">
              <h3 className="register-heading">Apply as a Employee</h3>
              <div className="row register-form">
                <div className="col-md">
                  <form onSubmit={loginSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="User"
                        required
                        //   autoComplete="on"
                        placeholder="Email *"
                        value={user.User}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="Pass"
                        required
                        autoComplete="on"
                        placeholder="Password *"
                        value={user.Pass}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btnRegister"
                        value="Login"
                        data-toggle={data.tkn != null ? "modal" : ""}
                        data-target={data.tkn != null ? "#exampleModal" : ""}
                      />
                    </div>
                    {data.tkn != null ? (
                      <Popup res={data} number={number} />
                    ) : (
                      <p className="error_login">
                        * {data.dataErrorDescription} *
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab">
              <h3 className="register-heading">Apply as a Hirer</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      // maxlength="10"
                      // minlength="10"
                      className="form-control"
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option className="hidden" selected disabled>
                        Please select your Sequrity Question
                      </option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                      <option>What is your Pet Name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="`Answer *"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
