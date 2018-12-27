import { call, put, takeLatest } from 'redux-saga/effects';

import reducerFetch from '../../helpers/reducerFetch';
import { SERVER_URL } from '../../config';


// CONSTANT
const FETCH_REPOS_START = 'FETCH_REPOS_START';
const FETCH_REPOS_FINISH = 'FETCH_REPOS_FINISH';
const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';


// ACTIONS
export function fetchRepos(sorter) {
  return { type: FETCH_REPOS_START, payload: sorter };
}
export function fetchReposFinish(json) {
  return { type: FETCH_REPOS_FINISH, payload: json };
}
export function fetchReposError(err) {
  return { type: FETCH_REPOS_ERROR, payload: err };
}


// SAGA
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

export function* fetchReposWatcher() {
  yield takeLatest(FETCH_REPOS_START, fetchReposWorker);
}


// REDUCER
export default reducerFetch('repos');
