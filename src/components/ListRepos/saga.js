import { call, put, takeLatest } from 'redux-saga/effects';

import { SERVER_URL } from '../../config';
import { FETCH_REPOS_START, fetchReposFinish, fetchReposError } from './ducks';

function* fetchReposWorker(action) {
  try {
    const repos = yield call(
      url => fetch(url).then(res => res.json()),
      `${SERVER_URL}?since=${action.payload}`,
    );
    yield put(fetchReposFinish(repos));
  } catch (err) {
    yield put(fetchReposError(err));
  }
}

export default function* fetchReposWatcher() {
  yield takeLatest(FETCH_REPOS_START, fetchReposWorker);
}
