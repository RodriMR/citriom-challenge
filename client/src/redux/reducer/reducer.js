import { FETCH_PROPERTIES } from "../actions/actionTypes";

export const initialState = {
  properties: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      return {
        ...state,
        properties: action.payload,
      };
    }
    default:
      return state;
  }
}
export default reducer;
