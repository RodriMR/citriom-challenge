import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../../context/store";
import { ADMIN_SESSION } from "../../../redux/actions/actionTypes";
import { SearchBar } from "../../SearchBar/SearchBar";

export const NavBar_Admin = () => {
  const [state, dispatch] = useStore();
  const history = useHistory();
  const logOutSession = () => {
    localStorage.clear();
  };
  const checkSessionADMIN = async (dispatch) => {
    let loggedAdmin = false; //
    let loggedAdminInfo = JSON.parse(localStorage.getItem("myUser"));
    if (loggedAdminInfo !== null) {
      loggedAdmin = true;
      await dispatch({
        type: ADMIN_SESSION,
        payload: {
          adminId: loggedAdminInfo,
          session: loggedAdmin,
        },
      });
    } else {
      await dispatch({
        type: ADMIN_SESSION,
        payload: {
          session: loggedAdmin,
        },
      });
      history.push("/admin/login");
    }
  };

  useEffect(() => {
    checkSessionADMIN(dispatch);
  }, [state.sessionAdmin]);
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/admin/properties" className="navigation__link">
              <span>01</span>Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/admin/add_property" className="navigation__link">
              <span>02</span>
              Add Property
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={logOutSession}
              href="/admin/login"
              className="navigation__link"
            >
              <span>03</span>
              LOG OUT
            </a>
          </li>
          <li className="navigation__item"></li>
        </ul>
      </nav>
    </div>
  );
};
