import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavStyles from '../../styles/NavStyles';

interface AppProps {
  navigation: any;
}

export default class ActivityScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Activity",
    ...NavStyles
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Activity Welcome"
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