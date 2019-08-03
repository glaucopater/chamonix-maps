import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchMapDetailsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.MAP_DETAILS_LOADED: {
      return {
        data: action.data,
      };
    }
    default:
      return state;
  }
}
