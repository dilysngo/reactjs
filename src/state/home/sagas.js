import { all, takeLatest, call } from 'redux-saga/effects';
import { get } from 'lodash';
import axios from 'axios';
import * as Types from './constants';

const ROOT_API_TRON = 'a';

function* getTransactionsInfoById({ payload, callback }) {
  try {
    const response = yield call(() =>
      axios.post(`${ROOT_API_TRON}/wallet/gettransactioninfobyid`, { value: payload }, { loading: false }),
    );
    if (get(response, 'status') === 200) {
      callback(response.data);
    }
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(Types.GET_TRANSACTION_INFO_BY_ID, getTransactionsInfoById)]);
}
