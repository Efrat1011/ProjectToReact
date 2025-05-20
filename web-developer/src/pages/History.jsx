import { useTransactions } from "../context/TransactionsContext.jsx";
import TransactionList from "../components/TransactionList.jsx";

export default function History() {
  const { transactions } = useTransactions();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-extrabold text-red-800 mb-6 text-center">Транзакциялар тарихы</h2>
      <TransactionList transactions={transactions} />
    </div>
  );
}
