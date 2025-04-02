import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (name, email, password, role) => {
    setUser({ name, email, role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;