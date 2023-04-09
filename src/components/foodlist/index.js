import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export function FoodList({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: data.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>10 ingredientes | 60 min</Text>
      </View>
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
  },
  name: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
  },
});
