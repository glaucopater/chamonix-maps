import actionTypes from './actionTypes.js';
import { OFFLINE } from '../../constants';
import data from '../../mockup/off-pistes.json';
import { transformData, searchData } from '../../utils/helpers';

export function fetchStaticMapDetails(id) {
  const searchedData = searchData(data, id);
  return dispatch => {
    return dispatch({
      type: actionTypes.MAP_DETAILS_LOADED,
      data: transformData(searchedData),
    });
  };
}

export function fetchMapDetails(id) {
  return dispatch => {
    if (OFFLINE) {
      return dispatch(fetchStaticMapDetails(id));
    }
  };
}
