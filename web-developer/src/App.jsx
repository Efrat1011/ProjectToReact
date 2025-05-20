// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TransactionsProvider } from "./context/TransactionsContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Transfer from "./pages/Transfer";
import History from "./pages/History";

export default function App() {
  return (
    <AuthProvider>
      <TransactionsProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="transfer" element={<Transfer />} />
              <Route path="history" element={<History />} />
            </Route>
          </Routes>
        </Router>
      </TransactionsProvider>
    </AuthProvider>
  );
}
