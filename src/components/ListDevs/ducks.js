import { call, put, takeLatest } from 'redux-saga/effects';

import reducerFetch from '../../helpers/reducerFetch';
import { SERVER_URL } from '../../config';

// CONSTANTS
const DEVS_URL = `${SERVER_URL}devs`;
const DEVS_FETCH_START = 'DEVS_FETCH_START';
const DEVS_FETCH_FINISH = 'DEVS_FETCH_FINISH';
const DEVS_FETCH_ERROR = 'DEVS_FETCH_ERROR';


// ACTIONS
export function fetchDevs(sorter) {
  return { type: DEVS_FETCH_START, payload: sorter };
}
export function fetchDevsFinish(json) {
  return { type: DEVS_FETCH_FINISH, payload: json };
}
export function fetchDevsError(err) {
  return { type: DEVS_FETCH_ERROR, payload: err };
}


// SAGA
function* fetchDevsWorker(action) {
  try {
    const devs = yield call(
      url => fetch(url).then(res => res.json()),
      `${DEVS_URL}?since=${action.payload}`,
    );
    yield put(fetchDevsFinish(devs));
  } catch (err) {
    yield put(fetchDevsError(err));
  }
}

export function* fetchDevsWatcher() {
  yield takeLatest(DEVS_FETCH_START, fetchDevsWorker);
}


// REDUCER
export default reducerFetch('devs');
