import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/slices/transactionSlice";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transaction.transactions);
  const dispatch = useDispatch();

  return (
    <div className="col-start-2 col-span-1">
      <div className="text-md font-semibold mt-3 mb-2 py-2 border-b">
        History
      </div>
      <ul className="h-[130px] overflow-y-scroll">
        {transactions.map((e, i) => {
          if (e.amount >= 0) {
            return (
              <li className="flex justify-end m-1 shadow-md">
                <div className="p-2 flex w-[100%]">
                  <div>
                    <button
                      className="font-light text-slate-600 px-3 h-auto"
                      onClick={() => {
                        dispatch(deleteTransaction(i));
                      }}
                    >
                      x
                    </button>
                  </div>
                  <div className="flex justify-between w-[100%]">
                    <div className="text-gray-600 font font-semibold">
                      {e.text}
                    </div>
                    <div>+${Math.abs(e.amount).toFixed(2)}</div>
                  </div>
                </div>
                <div className="w-[3px] bg-green-500"> </div>
              </li>
            );
          } else {
            return (
              <li className="flex justify-end m-1 shadow-md">
                <div className="p-2 flex w-[100%]">
                  <div>
                    <button
                      className="font-light text-slate-600 px-3 h-auto"
                      onClick={() => {
                        dispatch(deleteTransaction(i));
                      }}
                    >
                      x
                    </button>
                  </div>
                  <div className="flex justify-between w-[100%]">
                    <div className="text-gray-600 font font-semibold">
                      {e.text}
                    </div>
                    <div>-${Math.abs(e.amount).toFixed(2)}</div>
                  </div>
                </div>
                <div className="w-[3px] bg-red-500"> </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
