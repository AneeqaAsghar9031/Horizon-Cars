import React, { useState, useEffect } from "react";
import axios from "axios";

import Input from "./Input";

const INITIAL_STATE = {
 
  username: "",
  password: ""
};
export default function App() {
    const user = JSON.parse(localStorage.getItem('user'))
  const [users, setUser] = useState(INITIAL_STATE);
  useEffect(() => {
    (async () => {
      try {
        const user = await axios.get(
          "/api/users"
        );
        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.username, " : ", e.target.value);
    setUser({ ...user, [e.target.username]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(`api/users${user.id}`, user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={user.name}
          placeholder={"Your name"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="password"
          type="password"
          value={user.password}
          placeholder={"Your password"}
          handleInput={handleInput}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}