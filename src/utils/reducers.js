import { combineReducers } from 'redux';
import { fetchMapsReducer } from '../containers/MainContainer/reducers';
import { fetchMapDetailsReducer } from '../containers/MapDetails/reducers';

const reducers = combineReducers({
  fetchMapDetails: fetchMapDetailsReducer,
  fetchMaps: fetchMapsReducer,
});

export default reducers;
