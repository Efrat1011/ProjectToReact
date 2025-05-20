import { useTransactions } from "../context/TransactionsContext";

export default function History() {
  const { transactions } = useTransactions();

  if (transactions.length === 0) {
    return (
      <div className="p-6 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6">Транзакциялар тарихы</h2>
        <p>Транзакциялар жоқ</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Транзакциялар тарихы</h2>
      <ul className="space-y-4">
        {transactions.map(({ id, to, amount, date }) => (
          <li
            key={id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <p className="font-semibold">{to}</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
            <p className="font-semibold text-red-600">- {amount} ₸</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
