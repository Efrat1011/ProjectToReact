// components/BalanceCard.jsx
import { useAuth } from "../context/AuthContext";

export default function BalanceCard() {
  const { balance } = useAuth();

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-bold mb-2">Сіздің балансыңыз</h2>
      <p className="text-3xl font-semibold text-green-600">
        {balance.toLocaleString()} ₸
      </p>
    </div>
  );
}
