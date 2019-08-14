import { accountConstants } from "../constants";

export const accountActions = {
  getBalances,
  increaseBalance,
  reduceBalance
};

function getBalances() {
  return dispatch => {
    dispatch(start());

    setTimeout(() => {
      dispatch(success(2500701));
    }, 1000);
  };

  function start() {
    return { type: accountConstants.ACCOUNT_DETAILS_FETCH };
  }
  function success(amount) {
    return { type: accountConstants.ACCOUNT_DETAILS_FETCHED, amount };
  }
}

function reduceBalance(amount, deduction) {
  return dispatch => {
    dispatch(success(parseInt(amount, 10) - parseInt(deduction, 10)));
  };

  function success(amount) {
    return { type: accountConstants.ACCOUNT_DETAILS_ALTERED, amount };
  }
}

function increaseBalance(amount, increment) {
  return dispatch => {
    dispatch(success(parseInt(amount, 10) + parseInt(increment, 10)));
  };

  function success(amount) {
    return { type: accountConstants.ACCOUNT_DETAILS_ALTERED, amount };
  }
}
