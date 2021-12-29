import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const signClass = transaction.amount > 0 ? "plus" : "minus";
  const sign = transaction.amount > 0 ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={signClass}>
      {transaction.text}{" "}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
