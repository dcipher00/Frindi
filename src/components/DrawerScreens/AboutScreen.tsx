import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NavStyles from '../../styles/NavStyles';
import { Button } from "react-native-paper";

interface AppProps {
  navigation: any;
}

export default class About extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Abouts",
    ...NavStyles
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate('Welcome')}
        >
          back to Welcome
        </Button>
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