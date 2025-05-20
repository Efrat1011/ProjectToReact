// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-700 text-white text-center py-3 sm:py-5 shadow-inner select-none mt-auto">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
        <span className="text-xl sm:text-2xl">🏦</span>
        <p className="font-light">
          &copy; {new Date().getFullYear()} Jana Bank. Барлық құқықтар қорғалған.
        </p>
      </div>
    </footer>
  );
}
