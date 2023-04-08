import { View, Text, StyleSheet } from "react-native";

export const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Página de Favoritos!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
