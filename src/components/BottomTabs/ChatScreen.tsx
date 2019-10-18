import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavStyles from '../../styles/NavStyles';

interface AppProps {}

export default class ChatScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Chats",
    ...NavStyles
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Chat Welcome"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
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