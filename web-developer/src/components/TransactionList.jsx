const transactions = [
  { id: 1, to: "Эфрат", amount: 20000, date: "2025-05-15" },
  { id: 2, to: "Анара", amount: 5000, date: "2025-05-18" },
];

export default function TransactionList() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 mt-8">
      <h3 className="text-2xl font-bold text-red-700 mb-6">📜 Транзакциялар</h3>
      <ul className="divide-y divide-gray-200">
        {transactions.map(({ id, to, amount, date }) => (
          <li
            key={id}
            className="flex justify-between py-4 hover:bg-red-50 rounded-lg px-4 transition"
          >
            <span className="font-semibold text-gray-700">{date}</span>
            <span className="text-gray-900">{to}</span>
            <span className="font-bold text-red-700">
              {amount.toLocaleString()} ₸
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
