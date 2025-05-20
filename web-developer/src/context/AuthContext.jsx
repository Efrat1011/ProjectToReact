import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? Number(savedBalance) : 100000;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("balance");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  const login = (username) => {
    setUser({ name: username });
    if (!localStorage.getItem("balance")) {
      setBalance(100000);
    }
  };

  const logout = () => {
    setUser(null);
    setBalance(0);
    localStorage.removeItem("user");
    localStorage.removeItem("balance");
  };

  const decreaseBalance = (amount) => {
    setBalance((prev) => (prev - amount >= 0 ? prev - amount : prev));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, balance, decreaseBalance }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
