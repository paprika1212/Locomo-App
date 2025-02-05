import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello guys!!!</Text>
      <Link href= "/about" style={styles.button}> Go to About Screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: "#ffffff"
  },
  button: {
    color: "#ffffff",
    padding: 10,
    backgroundColor: "#0077cc",
    borderRadius: 5,
    marginTop: 10
  }
});

