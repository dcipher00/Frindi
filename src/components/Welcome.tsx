import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import NavStyles from '../styles/NavStyles';
import Button from "react-native-button";

interface AppProps {}

export default class Welcome extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Frindi",
    ...NavStyles
  };

  render() {
    const Image = require("../../assets/splash.png");
    return (
      
        <ImageBackground 
          source={Image} 
          style={styles.background}
        >
        <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('LoginScreen')}
          style={[styles.button,{backgroundColor: "#ff9900", color: "white"}]}
        >
          Already Have Account!
        </Button>
        <Button
          onPress={() => this.props.navigation.navigate('RegisterScreen')}
          style={[styles.button,{backgroundColor: "white", color:"#263992"}]}
        >
           Need New Account?
        </Button>
      </View>
    </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 400,
    flexDirection: "column"
  },
  button: {
    alignContent: "center",
    alignItems: "center",
    fontSize: 16,
    textAlignVertical: "center",
    borderRadius: 2,
    width: 200,
    height: 35,
    marginVertical: 8
  },
  background: {
    height: "100%",
    width: "100%"
  }
});
