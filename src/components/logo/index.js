import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.logoArea}>
      <Text style={styles.logo}>Receita Fácil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: "#4Cbe6c",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    padding: 4,
  },
});
