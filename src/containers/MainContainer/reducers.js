import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchMapsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.MAPS_LOADED: {
      return {
        data: action.data,
      };
    }
    default:
      return state;
  }
}
