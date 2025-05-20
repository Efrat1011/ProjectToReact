import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, balance } = useAuth();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6">Қош келдіңіз, {user?.name}!</h1>
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-2xl mb-2">Баланс</h2>
        <p className="text-4xl font-semibold">{balance} ₸</p>
      </div>
    </div>
  );
}
