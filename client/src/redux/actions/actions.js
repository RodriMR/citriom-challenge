import { FETCH_PROPERTIES, LOAD_COUNTRIES } from "./actionTypes";
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
