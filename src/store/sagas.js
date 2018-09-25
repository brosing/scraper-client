import { all, call } from 'redux-saga/effects';

import { fetchReposWatcher } from '../components/ListRepos/ducks';
import { fetchDevsWatcher } from '../components/ListDevs/ducks';

export default function* sagas() {
  yield all([
    call(fetchReposWatcher),
    call(fetchDevsWatcher),
  ]);
}
