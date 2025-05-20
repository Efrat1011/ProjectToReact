// components/TransactionForm.jsx
import { useState } from "react";

export default function TransactionForm({ onSubmit }) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient.trim()) return alert("Қолданушы атын енгізіңіз");
    const sum = parseFloat(amount);
    if (!amount || sum <= 0) return alert("Дұрыс сома енгізіңіз");

    onSubmit({ recipient: recipient.trim(), amount: sum });

    setRecipient("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 max-w-md mx-auto">
      <label className="block mb-4">
        <span className="font-semibold">Қолданушы аты</span>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Аударма алушының аты"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="font-semibold">Сома (теңге)</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Мысалы: 5000"
          required
          min="1"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Аудару
      </button>
    </form>
  );
}
