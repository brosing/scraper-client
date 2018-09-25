import { call, put, takeLatest } from 'redux-saga/effects';

import reducerFetch from '../../helpers/reducerFetch';
import { SERVER_URL } from '../../config';


// CONSTANT
const REPOS_FETCH_START = 'REPOS_FETCH_START';
const REPOS_FETCH_FINISH = 'REPOS_FETCH_FINISH';
const REPOS_FETCH_ERROR = 'REPOS_FETCH_ERROR';


// ACTIONS
export function fetchRepos(sorter) {
  return { type: REPOS_FETCH_START, payload: sorter };
}
export function fetchReposFinish(json) {
  return { type: REPOS_FETCH_FINISH, payload: json };
}
export function fetchReposError(err) {
  return { type: REPOS_FETCH_ERROR, payload: err };
}


// SAGA
function* fetchDevsWorker(action) {
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

export function* fetchReposWatcher() {
  yield takeLatest(REPOS_FETCH_START, fetchDevsWorker);
}


// REDUCER
export default reducerFetch('repos');
