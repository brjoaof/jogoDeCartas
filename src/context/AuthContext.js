import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { login } from "../services/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    console.log("LOGINNNN");
    const { user, token } = await login();

    if (user && token) {
      setUser(user);
      //para JWT
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

//Diminui uma importação no código =)
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
