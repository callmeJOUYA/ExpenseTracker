import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: { balance: 0, transactions: [], income: 0, expense: 0 },
  reducers: {
    setTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.balance += action.payload.amount;
      if (action.payload.amount > 0) {
        state.income += action.payload.amount;
      } else {
        state.expense += action.payload.amount;
      }
    },
    deleteTransaction: (state, action) => {
      state.transactions.splice(action.payload, 1);
    },
  },
});

export const { deleteTransaction, setTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
