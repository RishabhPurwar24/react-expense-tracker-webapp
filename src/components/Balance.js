import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  const total1 = amount.reduce((acc, item) => {
    acc = acc + item;
    return acc;
  }, 0);
  const total = total1.toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">₹{total}</h1>
    </>
  );
};

export default Balance;
