import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationScreen from "./src/components/NavigationScreen";

export default function App() {
  return (
    <NavigationScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
