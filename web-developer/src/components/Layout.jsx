import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-grow p-6 bg-gray-50">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
