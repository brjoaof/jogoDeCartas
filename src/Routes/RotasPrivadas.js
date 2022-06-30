import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Game from "../screens/Game";

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ title: "Título da Página" }}
      />
    </Stack.Navigator>
  );
};

export default RotasPrivadas;
