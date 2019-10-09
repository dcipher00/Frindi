import React from "react";
import { TextInput, StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import NavStyles from '../../styles/NavStyles';

interface AppProps {}

export default class LoginScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Register",
    ...NavStyles
  };

  constructor(props) {
    super(props);
    
    this.state = {
        name: '',
      username: '',
      password: '',
      mobile: ''
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
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'Name'}
            style={styles.input}
          />
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Email'}
            style={styles.input}
          />
            <TextInput
            value={this.state.mobile}
            onChangeText={(mobile) => this.setState({ mobile })}
            placeholder={'Mobile No.'}
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
            title={'Register'}
            style={styles.button}
            onPress={() => this.props.navigation.navigate('WelcomeScreen')}
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
