import { call, put, takeLatest } from 'redux-saga/effects';

import reducerFetch from '../../helpers/reducerFetch';
import { SERVER_URL } from '../../config';

// CONSTANTS
const DEVS_URL = `${SERVER_URL}devs`;
const FETCH_DEVS_START = 'FETCH_DEVS_START';
const FETCH_DEVS_FINISH = 'FETCH_DEVS_FINISH';
const FETCH_DEVS_ERROR = 'FETCH_DEVS_ERROR';


// ACTIONS
export function fetchDevs(sorter) {
  return { type: FETCH_DEVS_START, payload: sorter };
}
export function fetchDevsFinish(json) {
  return { type: FETCH_DEVS_FINISH, payload: json };
}
export function fetchDevsError(err) {
  return { type: FETCH_DEVS_ERROR, payload: err };
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
  yield takeLatest(FETCH_DEVS_START, fetchDevsWorker);
}


// REDUCER
export default reducerFetch('devs');
