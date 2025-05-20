import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert("Қолданушы атын енгізіңіз");
    login(username.trim());
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Кіру</h2>
        <label className="block mb-4">
          <span className="font-semibold">Қолданушы аты</span>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Атыңызды енгізіңіз"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Кіру
        </button>
      </form>
    </div>
  );
}
