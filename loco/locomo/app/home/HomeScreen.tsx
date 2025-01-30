// Header.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Bell, Search } from "lucide-react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Locomo</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Search style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Bell style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

// Footer.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Home, MapPin, Calendar, User } from "lucide-react-native";

export function Footer() {
  const tabs = [
    { icon: <Home style={styles.icon} />, label: "Home" },
    { icon: <MapPin style={styles.icon} />, label: "Maps" },
    { icon: <Calendar style={styles.icon} />, label: "Events" },
    { icon: <User style={styles.icon} />, label: "You" },
  ];

  return (
    <View style={styles.footer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} style={styles.tab}>
          {tab.icon}
          <Text style={styles.label}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tab: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});

// LocomoUI.js
import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function LocomoUI() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Search Bar */}
        <TextInput
          placeholder="Search places, events..."
          style={styles.searchBar}
        />

        {/* Categories */}
        <View style={styles.categories}>
          {[
            { icon: "🍔", label: "Food" },
            { icon: "🎉", label: "Events" },
            { icon: "🛍️", label: "Shopping" },
            { icon: "🌙", label: "Nightlife" },
          ].map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </View>
          ))}
        </View>

        {/* Trending Spots */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Spots</Text>
          <View style={styles.trendingSpots}>
            {["Downtown Cafe", "City Park"].map((spot, index) => (
              <View key={index} style={styles.spotCard}>
                <View style={styles.spotImage} />
                <Text style={styles.spotTitle}>{spot}</Text>
                <Text style={styles.spotDetails}>4.{5 + index} ⭐ ({120 - index * 31})</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.eventCard}>
            <View style={styles.eventDate}>
              <Text style={styles.eventDay}>15</Text>
            </View>
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>Street Food Festival</Text>
              <Text style={styles.eventLocation}>Central Square • 2PM</Text>
            </View>
            <Text style={styles.eventSave}>Save</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  content: {
    padding: 16,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  category: {
    alignItems: "center",
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryLabel: {
    fontSize: 12,
    color: "#666",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  trendingSpots: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  spotCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  spotImage: {
    height: 80,
    backgroundColor: "#ddd",
    borderRadius: 4,
    marginBottom: 8,
  },
  spotTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  spotDetails: {
    fontSize: 12,
    color: "#666",
  },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventDate: {
    width: 48,
    height: 48,
    backgroundColor: "#ddd",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  eventDay: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  eventLocation: {
    fontSize: 12,
    color: "#666",
  },
  eventSave: {
    fontSize: 12,
    color: "#007BFF",
    fontWeight: "bold",
  },
});
