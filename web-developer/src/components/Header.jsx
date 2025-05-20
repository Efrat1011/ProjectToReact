import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Kaspi Bank</Link>
      <nav className="space-x-4">
        {user ? (
          <>
            <Link to="/" className="hover:underline">Басты бет</Link>
            <Link to="/transfer" className="hover:underline">Аудару</Link>
            <Link to="/history" className="hover:underline">Транзакциялар</Link>
            <button onClick={handleLogout} className="ml-4 bg-white text-red-600 px-3 py-1 rounded">Шығу</button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">Кіру</Link>
        )}
      </nav>
    </header>
  );
}
