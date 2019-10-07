import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NavStyles from '../../styles/NavStyles';

interface AppProps {}

export default class ActivityScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Lecture",
    ...NavStyles
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Lecture Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#263992",
    justifyContent: "center",
    paddingTop: 25,
  },
});