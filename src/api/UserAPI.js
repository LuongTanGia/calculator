import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI() {
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState([]);

  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  // console.log(userLogin);
  const remoteDB = localStorage.getItem("remoteDB");

  useEffect(() => {
    if (remoteDB) {
      const getUser = async () => {
        try {
          const res = await axios.post(
            "https://isalewebapi.viettassaigon.vn/api/Auth/DanhSachDuLieu",
            {
              ...userLogin,
            }
          );

          // localStorage.setItem("tokenLoginRef", res.data.rtkn);
          localStorage.setItem("tokenLogin", res.data.tkn);
        } catch (err) {
          alert(err.response.data.msg);
        }
        const token = localStorage.getItem("tokenLogin");
        try {
          const res = await axios.post(
            "https://isalewebapi.viettassaigon.vn/api/Auth/DangNhap",
            {
              TokenID: token,
              RemoteDB: remoteDB,
            }
          );

          setData(res.data.dataResults);
          setIsLogged(true);
        } catch (err) {
          // alert(err.response.data.msg);
        }
      };

      getUser();
    }
  }, []);

  return {
    isLogged: [isLogged, setIsLogged],
    homeData: [data, setData],
  };
}

export default UserAPI;
