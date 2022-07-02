import { createDrawerNavigator } from "@react-navigation/drawer";
import Game from "../screens/Game";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Game" component={Game} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
