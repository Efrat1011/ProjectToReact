export default function BalanceCard({ balance }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto text-center mt-6">
      <h3 className="text-gray-700 font-semibold mb-2">Сіздің Балансыңыз</h3>
      <p className="text-4xl font-bold text-red-700">{balance.toLocaleString()} ₸</p>
    </div>
  );
}
