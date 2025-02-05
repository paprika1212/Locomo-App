import React from "react";
import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFound() {
    return (
        <>
            <Stack.Screen options={{ title: 'Not Found' }} />
            <View style={styles.container}>
                <Link href="/(tabs)" style={styles.button}>Go to Home</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  });