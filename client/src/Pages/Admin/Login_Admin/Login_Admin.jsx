import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login_Admin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      console.log("entre en el try");
      const userToken = await axios.post("http://localhost:3001/admin/login", {
        email: email,
        password: password,
      });
      console.log(userToken.data.id, "user token");
      if (userToken) {
        localStorage.setItem("myUser", JSON.stringify(userToken.data.id));
        history.push("/admin/properties");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      {console.log(user)}
      <form onSubmit={handleLogin} autoComplete="off">
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};
