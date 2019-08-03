import actionTypes from './actionTypes.js';
import { OFFLINE } from '../../constants';
import data from '../../mockup/off-pistes.json';
import { transformData } from '../../utils/helpers';

export function fetchStaticMaps() {
  return dispatch => {
    return dispatch({
      type: actionTypes.MAPS_LOADED,
      data: transformData(data),
    });
  };
}

export function fetchMaps() {
  return dispatch => {
    if (OFFLINE) {
      return dispatch(fetchStaticMaps());
    }
  };
}
