import {
  TRANSACTIONS_LIST_FAIL,
  TRANSACTIONS_LIST_REQUEST,
  TRANSACTIONS_LIST_SUCCESS,
  TRANSACTIONS_CREATE_FAIL,
  TRANSACTIONS_CREATE_SUCCESS,
  TRANSACTIONS_CREATE_REQUEST,
} from "../constants/transactionConstant";
import axios from "axios";

export const listTransactions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRANSACTIONS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/transactions`, config);

    dispatch({
      type: TRANSACTIONS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: TRANSACTIONS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createtransactionAction =
  (amount, result, months) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TRANSACTIONS_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/transactions/create`,
        { amount, result, months },
        config
      );

      dispatch({
        type: TRANSACTIONS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: TRANSACTIONS_CREATE_FAIL,
        payload: message,
      });
    }
  };
