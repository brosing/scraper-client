import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import listReposReducer from './components/ListRepos/ducks';
import listDevsReducer from './components/ListDevs/ducks';

const reducers = combineReducers({
  listRepos: listReposReducer,
  listDevs: listDevsReducer
})

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);