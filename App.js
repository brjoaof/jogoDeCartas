import React from "react";
import { StatusBar } from "react-native";
import AuthProvider from "./src/context/AuthContext";
import Routes from "./src/Routes";

const App = () => {
  return (
    <AuthProvider>
      <StatusBar />
      <Routes />
    </AuthProvider>
  );
};

export default App;
