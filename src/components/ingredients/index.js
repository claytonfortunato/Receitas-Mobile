import { View, Text, StyleSheet } from "react-native";

export function Ingredients() {
  return (
    <View style={styles.container}>
      <Text>Massa de pizza</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
