// components/SideBar.jsx
import { NavLink } from "react-router-dom";

const baseClass =
  "flex items-center gap-3 sm:gap-4 py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 font-semibold cursor-pointer select-none text-sm sm:text-base";
const activeClass = "bg-red-800 text-white shadow-lg";

export default function SideBar() {
  return (
    <aside className="bg-white shadow-xl flex flex-col py-4 sm:py-8 px-2 sm:px-6 min-h-[calc(100vh-64px-64px)] w-20 sm:w-64">
      <nav className="flex flex-col gap-2 sm:gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : "text-red-700 hover:bg-red-100"}`
          }
          title="Басты бет"
        >
          <span className="text-xl sm:text-3xl">🏠</span>
          <span className="hidden sm:inline">Басты бет</span>
        </NavLink>

        <NavLink
          to="/deposit"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : "text-red-700 hover:bg-red-100"}`
          }
          title="Ақша салу"
        >
          <span className="text-xl sm:text-3xl">➕</span>
          <span className="hidden sm:inline">Ақша салу</span>
        </NavLink>

        <NavLink
          to="/transfer"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : "text-red-700 hover:bg-red-100"}`
          }
          title="Аудару"
        >
          <span className="text-xl sm:text-3xl">💸</span>
          <span className="hidden sm:inline">Аудару</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : "text-red-700 hover:bg-red-100"}`
          }
          title="Тарих"
        >
          <span className="text-xl sm:text-3xl">🧾</span>
          <span className="hidden sm:inline">Тарих</span>
        </NavLink>
      </nav>
    </aside>
  );
}
