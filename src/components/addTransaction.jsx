import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setTransaction } from "../redux/slices/transactionSlice";

const AddTransaction = () => {
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();

  return (
    <div className="col-start-2 col-span-1">
      <div>
        <div className="text-md font-semibold mt-5 mb-2 py-2 border-b">
          Add new transaction
        </div>
        <form>
          <div>
            <label
              htmlFor="text"
              className="mt-2 block text-gray-600 font font-semibold"
            >
              Text:
            </label>
            <input
              type="text"
              id="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter text..."
              className="p-2 rounded-sm w-full my-2 border border-slate-200 font-semibold"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-gray-600 font font-semibold"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter amount..."
              className="p-2 rounded-sm w-full my-2 border border-slate-200 font-semibold"
            />
          </div>
          <div>
            <span
              className="bottom-4 bg-purple-600 cursor-pointer block text-center py-2 mt-2 mb-2 rounded-md text-white font-semibold"
              onClick={() => {
                dispatch(
                  setTransaction({
                    text: text,
                    amount: parseFloat(amount) || 0,
                  })
                );
                console.log("added");
              }}
            >
              Add transaction
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
