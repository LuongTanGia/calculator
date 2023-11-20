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

      localStorage.setItem("firstLogin", true);
      localStorage.setItem("tokenLoginDanhSach", res.data.tkn);

      setNumber(60);

      setData(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="User"
          required
          //   autoComplete="on"
          placeholder="Email"
          value={user.User}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="Pass"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.Pass}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit" data-toggle="modal" data-target="#exampleModal">
            Login
          </button>
          <Link to="/register">Register</Link>
        </div>
      </form>
      <Popup res={data} number={number} />
    </div>
  );
}

export default Login;
