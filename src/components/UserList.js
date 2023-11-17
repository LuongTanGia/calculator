// components/UserList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearUser } from "../userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAddUser = () => {
    if (userName) {
      dispatch(addUser({ name: userName }));
      setUserName("");
    }
  };
  const handleClearUser = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={userName} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={handleClearUser}>Clear User</button>
      </div>
    </div>
  );
};

export default UserList;
