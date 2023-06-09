import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export function FoodList({ data }) {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Detail", { data: data });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image source={{ uri: data.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>
          {data.total_ingredients} ingredientes | {data.time} min
        </Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={["transparent", "rgba(0,0,0,0.70)", "rgba(0,0,0,0.95)"]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  info: {
    position: "absolute",
    bottom: 0,
    left: 14,
    zIndex: 99,
    marginBottom: 4,
  },
  name: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: 16,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
    borderRadius: 8,
    zIndex: 1,
    backgroundColor: "transparent",
  },
});
