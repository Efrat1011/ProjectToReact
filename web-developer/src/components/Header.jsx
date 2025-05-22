// components/Header.jsx
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-red-700 to-red-900 shadow-lg text-white px-4 sm:px-8 py-4 flex justify-between items-center select-none">
      <div className="flex items-center gap-3 sm:gap-6">
        <span className="text-3xl sm:text-4xl">🏦</span>
        <h1 className="text-xl sm:text-3xl font-extrabold tracking-wide">Smart Bank</h1>
      </div>
      {user && (
        <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-lg font-semibold whitespace-nowrap">
          <span>
            👋 Сәлем, <span className="underline decoration-yellow-400">{user.username}</span>!
          </span>
          <button
            onClick={logout}
            className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold px-3 py-1 sm:px-5 sm:py-2 rounded-lg shadow-md transition-colors duration-300"
            aria-label="Шығу"
          >
            🚪 Шығу
          </button>
        </div>
      )}
    </header>
  );
}
