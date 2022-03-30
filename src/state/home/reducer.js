import produce from 'immer';
import * as Types from './constants';

const initialState = {
  listPlan: 0,
};

export default function HomeReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_TRANSACTION_INFO_BY_ID:
        draft.listPlan = payload;
        break;
      default:
        break;
    }
  });
}
