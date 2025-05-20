import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Пайдаланушы атын енгізіңіз");
      return;
    }
    login(username.trim());
    navigate("/");
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-r from-red-900 to-red-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-red-800 text-center">
          Кіру
        </h2>
        <label className="block mb-6">
          <span className="text-gray-700 font-semibold mb-1 block">Пайдаланушы аты</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Атыңызды енгізіңіз"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Кіру
        </button>
      </form>
    </div>
  );
}
