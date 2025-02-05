import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello guys!!! This is map Screen</Text>
      <Link href= "/home" style={styles.button}> Go to Home now</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  logo: {
    width: 150,
    height: 150, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
