import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { login } from "../../services/auth";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);

  return (
    <View>
      <Text>Login</Text>
      <Button title="ENTRAR" onPress={signIn} />
    </View>
  );
};

export default Login;
