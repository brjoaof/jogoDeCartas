import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { getCards } from "../../services/axiosClient";
import { AuthContext } from "../../context/AuthContext";

const Game = ({ route }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);
  const { name, idade } = useContext(AuthContext);

  useEffect(() => {
    const get = async () => {
      const deck = await getCards(deckId, 7);
      setCards(deck);
    };
    get();
  }, []);

  useEffect(() => {
    // if (cards.length === 0) return;
    console.log(cards);
    console.log(name, idade);
  }, [cards]);

  return (
    <View>
      {cards &&
        cards.cards.map((card, index) => <Text key={index}>{card.image}</Text>)}
    </View>
  );
};

export default Game;
