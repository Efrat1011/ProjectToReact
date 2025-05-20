import { useState } from "react";

export default function TransferForm() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Аударылды: ${amount} ₸ → ${receiver}\n${note}`);
    setReceiver("");
    setAmount("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-3xl p-10 shadow-2xl flex flex-col gap-6"
    >
      <input
        type="text"
        placeholder="Алушы"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        required
        className="border-2 border-red-600 rounded-xl p-4 text-lg placeholder-red-300 focus:outline-none focus:ring-4 focus:ring-red-400"
      />
      <input
        type="number"
        placeholder="Сома"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="border-2 border-red-600 rounded-xl p-4 text-lg placeholder-red-300 focus:outline-none focus:ring-4 focus:ring-red-400"
      />
      <input
        type="text"
        placeholder="Комментарий"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border-2 border-red-600 rounded-xl p-4 text-lg placeholder-red-300 focus:outline-none focus:ring-4 focus:ring-red-400"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-red-700 to-red-900 text-white py-4 rounded-3xl font-extrabold shadow-lg hover:from-red-900 hover:to-red-700 transition"
      >
        Аудару
      </button>
    </form>
  );
}
