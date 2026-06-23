import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Content Area */}
      <View style={styles.mainContent}>
        {currentScreen === 'Home' ? (
          
          <View style={styles.centerContent}>
            <Text style={styles.welcomeTitle}>Welcome to Weather App</Text>
            <Text style={styles.welcomeSub}>Check the weather's temperature and conditions in your city, whatever you need to know.</Text>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setCurrentScreen('Weather')}
            >
              <Text style={styles.buttonText}>Check Weather</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // --- WEATHER SCREEN ---
          <View style={styles.centerContent}>
            <Text style={styles.headerTitle}>Current Weather</Text>
            <View style={styles.card}>
              <Text style={styles.provinceName}>PROVINCE: Kigali</Text>
              <Text style={styles.cityName}>CITY: Kigali</Text>
              <Text style={styles.temperature}>TEMPERATURE: 25°C</Text>
              <Text style={styles.condition}>CONDITION: Friendly Cloudy</Text>
            </View>
          </View>
        )}
      </View>

      
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setCurrentScreen('Home')}
        >
          <Text style={[styles.navText, currentScreen === 'Home' && styles.activeNav]}>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setCurrentScreen('Weather')}
        >
          <Text style={[styles.navText, currentScreen === 'Weather' && styles.activeNav]}>☁️ Weather</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  centerContent: {
    alignItems: 'center',
    width: '100%',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
  },
  welcomeSub: {
    fontSize: 16,
    color: 'skygray',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'darkgreen',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
  },
  cityName: {
    fontSize: 23,
    fontWeight: '600',
    color: 'darkgreen',
  },
  provinceName: {
    fontSize: 23,
    fontWeight: '600',
    color: 'darkgreen',
  },
  temperature: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
  condition: {
    fontSize: 18,
    color: '#666',
  },
  navBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#B2DFDB',
    paddingBottom: 10,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: '#80CBC4',
  },
  activeNav: {
    color: 'darkgreen',
    fontWeight: 'bold',
  },
});
