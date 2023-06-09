import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Logo } from "../../components/logo";
import { FoodList } from "../../components/foodlist";

import api from "../../services/api";

import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await api.get("/foods");
      setFoods(response.data);
    };

    fetchApi();
  }, []);

  const handleSearch = () => {
    if (!inputValue) return;

    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", { name: input });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text>Encontre a receita</Text>
      <Text>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4CBE6c" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    color: "#0e0e0e",
    fontSize: 32,
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ececec",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "90%",
    maxWidth: "90%",
    height: 54,
    fontSize: 18,
  },
});
