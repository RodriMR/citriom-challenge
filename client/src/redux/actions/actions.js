import { FETCH_PROPERTIES } from "./actionTypes";
import axios from "axios";
export const getAllProperties = async (dispatch) => {
  const fetchedProperties = await axios.get("http://localhost:3001/properties");
  dispatch({
    type: FETCH_PROPERTIES,
    payload: fetchedProperties.data,
  });
};
