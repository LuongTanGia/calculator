import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState([]);

  const remoteDB = localStorage.getItem("remoteDB");
  console.log(token, "Access");
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.post(
            "https://isalewebapi.viettassaigon.vn/api/Auth/DangNhap",
            {
              TokenID: token,
              RemoteDB: remoteDB,
            }
          );

          setData(res.data.dataResults);
          setTimeout(() => {
            localStorage.setItem("tokenLoginRef", res.data.rtkn);
            localStorage.setItem("tokenLogin", res.data.tkn);
          }, 2000);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };

      getUser();
    }
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    homeData: [data, setData],
  };
}

export default UserAPI;
