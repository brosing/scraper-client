import { combineReducers } from 'redux';

import listReposReducer from '../components/ListRepos/ducks';
import listDevsReducer from '../components/ListDevs/ducks';

const reducers = combineReducers({
  listRepos: listReposReducer,
  listDevs: listDevsReducer,
});

export default reducers;
