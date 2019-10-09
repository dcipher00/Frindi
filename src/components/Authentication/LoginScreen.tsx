import React from "react";
import { TextInput, StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import NavStyles from '../../styles/NavStyles';

interface AppProps {}

export default class LoginScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Login",
    ...NavStyles
  };

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const Image = require("../../../assets/splash.png");
    return (
      
        <ImageBackground 
          source={Image} 
          style={styles.background}
        >
        <View style={styles.container}>
          <Text style={styles.text}>Welcome To frindi</Text>
          
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Login'}
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ActivityScreen')}
            />
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
    paddingTop: 25,
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
  },
  text: {
    padding: 20,
    color: "white",
    fontSize: 32
  },
  button: {
    width: 20,
    padding: 20
  },
  background: {
    height: "100%",
    width: "100%"
  }
});
