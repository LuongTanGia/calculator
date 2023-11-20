import React, { createContext, useState, useEffect } from "react";

import UserAPI from "./api/UserAPI";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const tokenLogin = localStorage.getItem("tokenLoginDanhSach");
  const tokenLoginAcc = localStorage.getItem("tokenLogin");

  console.log(tokenLoginAcc);
  const [token, setToken] = useState(tokenLogin);
  useEffect(() => {
    // const firstLogin = localStorage.getItem("firstLogin");
    // const tokenLoginRef = localStorage.getItem("tokenLoginRef");
    // const tokenLoginAcc = localStorage.getItem("tokenLogin");
    // if (firstLogin && tokenLoginRef != null) {
    //   const refreshToken = async () => {
    //     const res = await axios.post(
    //       "https://isalewebapi.viettassaigon.vn/api/Auth/RefreshToken",
    //       {
    //         TokenID: tokenLoginRef,
    //       }
    //     );
    //     // debugger;
    //     setToken(tokenLoginAcc);
    //     setTimeout(() => {
    //       refreshToken();
    //     }, 10 * 60 * 1000);
    //   };
    //   refreshToken();
    // }
  }, []);

  const state = {
    token: [token, setToken],
    userAPI: UserAPI(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
