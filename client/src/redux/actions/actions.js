import { ADMIN_SESSION, FETCH_PROPERTIES, LOAD_COUNTRIES } from "./actionTypes";
import axios from "axios";
export const getAllProperties = async (dispatch) => {
  let countriesList = [];
  const fetchedProperties = await axios.get("http://localhost:3001/properties");
  fetchedProperties.data.map((property) => {
    if (!countriesList.includes(property.country)) {
      countriesList.push(property.country);
    }
  });
  dispatch({
    type: LOAD_COUNTRIES,
    payload: countriesList,
  });
  dispatch({
    type: FETCH_PROPERTIES,
    payload: fetchedProperties.data,
  });
};
export const checkAdminSession = (dispatch) => {
  let logged = false;
  let adminId = JSON.parse(localStorage.getItem("myUser"));
  if (adminId) {
    logged = true;
    dispatch({
      type: ADMIN_SESSION,
      payload: {
        data: adminId,
        session: logged,
      },
    });
  } else {
    dispatch({
      type: ADMIN_SESSION,
      payload: {
        session: logged,
      },
    });
  }
};
