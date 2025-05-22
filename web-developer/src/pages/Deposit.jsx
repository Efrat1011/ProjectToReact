import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Deposit() {
  const { increaseBalance } = useAuth();
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(amount);
    if (isNaN(sum) || sum <= 0) {
      return alert("Дұрыс сома енгізіңіз");
    }
    increaseBalance(sum);
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-extrabold text-red-800 mb-6 text-center">
        Ақша салу
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">
            Сома (теңге)
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Мысалы: 50000000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Салу
        </button>
      </form>
    </div>
  );
}
