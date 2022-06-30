import React from "react";
import { StatusBar } from "react-native";
import AuthProvider from "./src/context/AuthContext";
import Routes from "./src/Routes";
import TreinoProvider from "./src/context/TreinoContext";

const App = () => {
  return (
    <AuthProvider>
      <TreinoProvider>
        <StatusBar />
        <Routes />
      </TreinoProvider>
    </AuthProvider>
  );
};

export default App;
