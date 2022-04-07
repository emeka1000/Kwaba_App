import {
  TRANSACTIONS_LIST_REQUEST,
  TRANSACTIONS_LIST_SUCCESS,
  TRANSACTIONS_LIST_FAIL,
  TRANSACTIONS_CREATE_REQUEST,
  TRANSACTIONS_CREATE_SUCCESS,
  TRANSACTIONS_CREATE_FAIL,
} from "../constants/transactionConstant";

export const transactionListReducer = (
  state = { transactions: [] },
  action
) => {
  switch (action.type) {
    case TRANSACTIONS_LIST_REQUEST:
      return { loading: true };
    case TRANSACTIONS_LIST_SUCCESS:
      return { loading: false, transaction: action.payload };
    case TRANSACTIONS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const transactionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTIONS_CREATE_REQUEST:
      return { loading: true };
    case TRANSACTIONS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case TRANSACTIONS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
