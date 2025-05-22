import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">{children}
         <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
