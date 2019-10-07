import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NavStyles from '../styles/NavStyles';

interface AppProps {}

export default class MainScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Frindi",
    ...NavStyles
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#263992",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
});