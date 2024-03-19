import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.transaction.balance);
  return (
    <div className="mt-6 col-start-2 col-span-1">
      <h4 className="text-md font-semibold">Your Balance</h4>
      <div className="font-bold text-4xl">${balance.toFixed(2)}</div>
    </div>
  );
};

export default Balance;
