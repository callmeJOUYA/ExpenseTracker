import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import store from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="cursor-default grid grid-cols-3 w-[100%] h-screen bg-slate-100">
      <Provider store={store}>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Provider>
    </div>
  );
}

export default App;
