import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { login } from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = async () => {
    console.log("LOGINNNN");
    const { user, token } = await login();

    if (user && token) {
      setUser(user);
      //para JWT
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      await AsyncStorage.setItem("@Cartas:user", JSON.stringify(user));
      await AsyncStorage.setItem("@Cartas:token", token);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, signIn, loading, setLoading }}
    >
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
