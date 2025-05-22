import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useTransactions } from "../context/TransactionsContext.jsx";

export default function Transfer() {
  const { balance, decreaseBalance } = useAuth();
  const { addTransaction } = useTransactions();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(amount);

    if (!recipient.trim()) return alert("Қолданушы атын енгізіңіз");
    if (!amount || isNaN(sum) || sum <= 0) return alert("Дұрыс сома енгізіңіз");
    if (sum > balance) return alert("Баланс жеткіліксіз!");

    const tx = {
      id: Date.now(),
      to: recipient.trim(),
      amount: sum,
      date: new Date().toLocaleDateString(),
    };

    addTransaction(tx);
    decreaseBalance(sum);

    setRecipient("");
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-extrabold text-red-800 mb-6 text-center">
        Аудару жасау
      </h2>
      <p className="mb-4 text-center text-gray-700 font-semibold">
        Баланс:{" "}
        <span className="text-red-700 text-lg font-bold">
          {balance.toLocaleString()} ₸
        </span>
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Қолданушы аты</span>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Аударма алушының аты"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold mb-1 block">Сома (теңге)</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Мысалы: 5000000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Аудару
        </button>
      </form>
    </div>
  );
}
