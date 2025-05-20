export default function TransactionList({ transactions }) {
  if (!transactions.length) {
    return (
      <p className="text-center text-gray-500 mt-10">Транзакциялар әлі жоқ.</p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-bold text-red-800 mb-4">Транзакциялар тарихы</h3>
      <ul className="divide-y divide-gray-200">
        {transactions.map(({ id, to, amount, date }) => (
          <li
            key={id}
            className="flex justify-between items-center py-3 px-2 hover:bg-red-50 rounded transition"
          >
            <div>
              <p className="font-semibold text-gray-800">Кімге: {to}</p>
              <p className="text-gray-500 text-sm">Күні: {date}</p>
            </div>
            <div className="text-red-700 font-bold text-lg">{amount.toLocaleString()} ₸</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
