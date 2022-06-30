import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { getDeckId } from "../../services/axiosClient";
import { styles } from "./styles";
import bgImg from "../../images/AAAA.webp";
import { TreinoContext } from "../../context/TreinoContext";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [idDeck, setIdDeck] = useState(null);
  const { dados } = useContext(TreinoContext);

  useEffect(() => {
    console.log("dados: ", dados);
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  const inciarPartida = async () => {
    navigation.navigate("Game", {
      deckId: idDeck,
    });
  };

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
      imageStyle={{ resizeMode: "contain", transform: [{ scale: 2.3 }] }}
    >
      <Text style={styles.title}>Jogo de Cartas</Text>
      <View style={{ flex: 2, justifyContent: "center", paddingTop: "25%" }}>
        <Button title="Iniciar Partida" onPress={inciarPartida} />
      </View>
    </ImageBackground>
  );
};

export default Home;
