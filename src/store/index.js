import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';
import logger from './logger';

// ADD LOGGER TO MIDDLEWARE IF NOT ON PRODUCTION BUILD
const saga = createSagaMiddleware();

let middleware = [saga];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

// eslint-disable-next-line
export const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

saga.run(sagas);
