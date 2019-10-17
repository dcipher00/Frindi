import React from "react";
import { TextInput, StyleSheet, View, Text, ImageBackground } from "react-native";
import NavStyles from '../../styles/NavStyles';
import Button from "react-native-button";

interface AppProps {}

const required = (value) => (value || typeof value === "number" ? undefined : "Required");
const maxLength = (max) => (value) =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = (min) => (value) =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined;

const email = (value) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? "Invalid email address"
		: undefined;

const maxLength256 = maxLength(256);
const minLength2 = minLength(2);

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

  validate_field = () => {
    const { username, password} = this.state
    if(username !== email) {
      alert("Please fill username")
      return false
    }
    else if(password !== maxLength256 || password !== minLength2) {
      alert ("Please fill password")
      return false
    }
    return true
  }

  making_api_call=()=> {
    if(this.validate_field())
    {
      this.props.navigation.navigate('ActivityScreen')
    }
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
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
            validate={[email, required, maxLength256, minLength2]}
          />
          <TextInput
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            validate={[required]}
          />
          
          <Button
            style={[styles.button,{backgroundColor: "#ff9900", color: "white"}]}
            onPress={() => this.making_api_call()}
          >
            Sign In!
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
    alignContent: "center",
    alignItems: "center",
    fontSize: 16,
    textAlignVertical: "center",
    borderRadius: 25,
    width: 100,
    height: 35,
    marginVertical: 20
  },
  background: {
    height: "100%",
    width: "100%"
  }
});
