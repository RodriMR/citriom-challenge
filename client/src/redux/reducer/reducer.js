import {
  ADMIN_SESSION,
  FETCH_PROPERTIES,
  FILTER_PROPERTIES,
  LOAD_COUNTRIES,
  ORDER_PROPERTIES,
} from "../actions/actionTypes";

export const initialState = {
  properties: [],
  countries: [],
  filteredProperties: [],
  adminSession: false,
  adminId: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      return {
        ...state,
        properties: action.payload,
      };
    }
    case ORDER_PROPERTIES: {
      return {
        ...state,
        properties: action.payload,
      };
    }
    case FILTER_PROPERTIES: {
      return {
        ...state,
        filteredProperties: action.payload,
      };
    }
    case LOAD_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case ADMIN_SESSION: {
      return {
        ...state,
        adminId: action.payload.data,
        session: action.payload.session,
      };
    }
    default:
      return state;
  }
}
export default reducer;
