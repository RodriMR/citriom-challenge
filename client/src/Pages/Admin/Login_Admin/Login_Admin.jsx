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
    <section className="section-login">
      <div className="row">
        <div className="login">
          <div className="login__form">
            <form className="form" onSubmit={handleLogin} autoComplete="off">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">LOGIN</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  id="email"
                  className="form__input"
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  required
                  className="form__input"
                  id="password"
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <div className="form__group">
                <button className="btn" type="submit">
                  LOGIN &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
