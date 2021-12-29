import React from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export default AppReducer;

// Reducer is the way to change your state and send it down to your components/applications
// So in delete_transaction we are creating new state and sending current state down to all components.
// transactions: return transaction except the one which is deleted.
