import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTransactions } from "../context/TransactionsContext";

export default function Transfer() {
  const { balance, decreaseBalance } = useAuth();
  const { addTransaction } = useTransactions();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(amount);

    if (!recipient.trim()) return alert("Қолданушы атын енгізіңіз");
    if (!amount || sum <= 0) return alert("Дұрыс сома енгізіңіз");
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
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Аудару жасау</h2>
      <p className="mb-4">Баланс: {balance} ₸</p>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6">
        <label className="block mb-4">
          <span className="font-semibold">Қолданушы аты</span>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Аударма алушының аты"
          />
        </label>
        <label className="block mb-4">
          <span className="font-semibold">Сома (теңге)</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Аударылатын сома"
            min="1"
          />
        </label>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Аудару
        </button>
      </form>
    </div>
  );
}
