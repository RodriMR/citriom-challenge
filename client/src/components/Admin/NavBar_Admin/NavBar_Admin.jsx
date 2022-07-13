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
    <nav>
      <Link to="/admin/properties">Home</Link>
      <Link to="/admin/add_property">Add Property</Link>
      <Link onClick={logOutSession} to="/admin/login">
        Logout
      </Link>
      <SearchBar />
    </nav>
  );
};
