import { createContext, useEffect, useState } from "react";
import { login } from "../services/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    console.log("LOGINNNN");
    const { user } = await login();
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
