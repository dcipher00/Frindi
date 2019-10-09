import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavStyles from '../styles/NavStyles';

interface AppProps {}

export default class UserSettingScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Frindi",
    ...NavStyles
  };

  render() {
    return (
        <View style={styles.container}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
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
