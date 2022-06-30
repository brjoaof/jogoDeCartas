import { View, Text, Button, TextInput } from "react-native";
import { useContext, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { TreinoContext } from "../../context/TreinoContext";

const Login = () => {
  const { signIn } = useAuth();
  const { handleInfo } = useContext(TreinoContext);
  const [info, setInfo] = useState("");

  const handleEntrar = () => {
    handleInfo(info);
    signIn();
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 100 }}>Login</Text>
      <TextInput
        value={info}
        onChangeText={setInfo}
        placeholder="Digite Seu Nome"
        style={{
          borderColor: "black",
          borderBottomWidth: 2,
          marginBottom: 20,
          marginTop: 20,
          padding: 10,
          width: "80%",
          alignSelf: "center",
          textAlign: "center",
        }}
      />
      <Button title="ENTRAR" onPress={handleEntrar} />
    </View>
  );
};

export default Login;
