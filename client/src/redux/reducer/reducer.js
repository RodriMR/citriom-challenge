import {
  FETCH_PROPERTIES,
  FILTER_PROPERTIES,
  LOAD_COUNTRIES,
  ORDER_PROPERTIES,
} from "../actions/actionTypes";

export const initialState = {
  properties: [],
  countries: [],
  filteredProperties: [],
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
    default:
      return state;
  }
}
export default reducer;
