import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import listReposReducer from './components/ListRepos/ducks';

const reducers = () => combineReducers(
  listReposReducer,
)

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);