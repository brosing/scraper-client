import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import listReposReducer from './components/ListRepos/ducks';
import listDevsReducer from './components/ListDevs/ducks';

const reducers = combineReducers({
  listRepos: listReposReducer,
  listDevs: listDevsReducer,
});

// SET LOGGER
const logger = store => next => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

// ADD LOGGER TO MIDDLEWARE IF NOT ON PRODUCTION BUILD
let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}


// eslint-disable-next-line
export const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);
