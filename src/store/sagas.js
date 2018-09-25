import { all, call } from 'redux-saga/effects';

import fetchReposWatcher from '../components/ListRepos/saga';
import fetchDevsWatcher from '../components/ListDevs/saga';

export default function* sagas() {
  yield all([
    call(fetchReposWatcher),
    call(fetchDevsWatcher),
  ]);
}
