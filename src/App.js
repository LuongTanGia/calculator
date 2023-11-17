import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState([]);
  const [string, setString] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dataResults");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    //http://192.168.0.87:3001
    fetchData();
  }, []);

  const nhomChucNang = data.filter((item) => item.nhomChucNang === "10");

  const clickShow = (index) => {
    if (number.includes(index)) {
      const newArray = number.slice();
      const indexToRemove = newArray.indexOf(index);
      newArray.splice(indexToRemove, 1);
      setNumber(newArray);
    } else {
      setNumber([...number, index]);
    }
  };

  const clickShow2 = (index) => {
    if (string.includes(index)) {
      const newArray = string.slice();
      const indexToRemove = newArray.indexOf(index);
      newArray.splice(indexToRemove, 1);
      setString(newArray);
    } else {
      setString([...string, index]);
    }
  };

  return (
    <div className="menu-container">
      {nhomChucNang.map((item, index) => (
        <div key={index} className="menu-item">
          <p onClick={() => clickShow(index)}>{item.tenChucNang}</p>
          <ul className="submenu">
            {data.map((chir_data) =>
              //   number.includes(index) &&
              chir_data.nhomChucNang === item.maChucNang ? (
                <li key={chir_data.maChucNang} className="submenu-item">
                  <p onClick={() => clickShow2(chir_data.maChucNang)}>
                    {chir_data.tenChucNang}
                  </p>
                  <ul className="submenu_2">
                    {/* cách 1 click
                     {data.map((chir_data_2) =>
                      chir_data_2.nhomChucNang === chir_data.maChucNang &&
                      string.includes(chir_data_2.nhomChucNang) ? (
                        <li
                          key={chir_data_2.maChucNang}
                          className="submenu-item_2">
                          {chir_data_2.tenChucNang}
                        </li>
                      ) : null
                    )} */}
                    {/* cách 2 hover */}
                    {data.map((chir_data_2) =>
                      chir_data_2.nhomChucNang === chir_data.maChucNang ? (
                        <Link
                          to={`${chir_data.maChucNang}/${chir_data_2.maChucNang}`}>
                          <li
                            key={chir_data_2.maChucNang}
                            className="submenu-item_2">
                            {chir_data_2.tenChucNang}
                          </li>
                        </Link>
                      ) : null
                    )}
                  </ul>
                </li>
              ) : null
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
