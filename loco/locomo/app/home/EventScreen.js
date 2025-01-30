// screens/EventScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const events = [
  { id: '1', name: 'Music Festival', date: 'Jan 30, 2025' },
  { id: '2', name: 'Food Market', date: 'Feb 5, 2025' },
  // Add more events
];

function EventScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 5,
    borderRadius: 8,
  },
});

export default EventScreen;
