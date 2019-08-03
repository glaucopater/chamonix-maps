import actionTypes from './actionTypes.js';
import { OFFLINE } from '../../constants';
import data from '../../mockup/off-pistes.json';
import { transformData } from '../../utils/helpers';

export function fetchStaticMapDetails() {
  return dispatch => {
    return dispatch({
      type: actionTypes.MAP_DETAILS_LOADED,
      data: transformData(data),
    });
  };
}

export function fetchMapDetails() {
  return dispatch => {
    if (OFFLINE) {
      return dispatch(fetchStaticMapDetails());
    }
  };
}
