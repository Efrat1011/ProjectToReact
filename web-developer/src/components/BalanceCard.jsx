export default function BalanceCard() {
  const balance = 100000000;
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-4 text-red-700">💳 Баланс</h3>
      <p className="text-5xl font-extrabold text-gray-900">
        {balance.toLocaleString()} ₸
      </p>
    </div>
  );
}
