import { combineReducers } from 'redux';
import { fetchMapDetailsReducer } from '../containers/MapDetails/reducers';

const reducers = combineReducers({
  fetchMapDetails: fetchMapDetailsReducer,
});

export default reducers;
