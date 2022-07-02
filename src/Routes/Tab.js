import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Game from "../screens/Game";
import Home from "../screens/Home";

const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator>
      <MyTab.Screen name="Home" component={Home} />
      <MyTab.Screen name="Game" component={Game} />
    </MyTab.Navigator>
  );
};

export default Tab;
