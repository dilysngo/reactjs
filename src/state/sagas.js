import { all } from 'redux-saga/effects';

import User from './user/sagas';
import Home from './home/sagas';

export default function* rootSaga() {
  yield all([User(), Home()]);
}
