import { call, put, takeLatest } from 'redux-saga/effects';

import { SERVER_URL } from '../../config';
import { FETCH_DEVS_START, fetchDevsFinish, fetchDevsError } from './ducks';

// CONSTANT
const DEVS_URL = `${SERVER_URL}devs`;

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

export default function* fetchDevsWatcher() {
  yield takeLatest(FETCH_DEVS_START, fetchDevsWorker);
}