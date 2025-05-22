// pages/Home.jsx
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import { useTransactions } from "../context/TransactionsContext";

export default function Home() {
  const { transactions } = useTransactions();

  return (
    <div>
      <BalanceCard />
      <h3 className="text-xl font-semibold mb-4 ">Соңғы транзакциялар</h3>
      {transactions.length === 0 ? (
        <p>Транзакциялар жоқ</p>
      ) : (
        <TransactionList transactions={transactions.slice(0, 5)} />
      )}
    </div>
  );
}
