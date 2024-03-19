import React from "react";
import { useSelector } from "react-redux";

const IncomeExpenses = () => {
  const income = useSelector((state) => state.transaction.income);
  const expense = useSelector((state) => state.transaction.expense);
  return (
    <div className="col-start-2 col-span-1 ">
      <div className="flex justify-center mt-5 shadow p-3">
        <div className="py-2 w-[50%] text-center ">
          <div className="">income</div>
          <div className="text-green-500">${income.toFixed(2)}</div>
        </div>
        <div className="py-2 w-[50%] text-center border-l">
          <div>expense</div>
          <div className="text-red-500">${expense.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
