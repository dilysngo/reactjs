import * as Types from './constants';

export const getTransactionsInfoById = (payload, callback) => ({
  type: Types.GET_TRANSACTION_INFO_BY_ID,
  payload,
  callback,
});
