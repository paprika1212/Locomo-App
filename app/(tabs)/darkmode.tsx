import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <View style={[styles.container, darkMode ? styles.darkMode : styles.lightMode]}>
            <Text style={styles.text}>Toggle Dark Mode</Text>
            <TouchableOpacity style={styles.button} onPress={toggleDarkMode}>
                <Text style={styles.buttonText}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightMode: {
        backgroundColor: '#ffffff',
    },
    darkMode: {
        backgroundColor: '#333333',
    },
    text: {
        fontSize: 18,
        color: '#000',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default DarkModeToggle;
