import React from "react";
import { TextInput, StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import NavStyles from '../../styles/NavStyles';
import Button from "react-native-button";

interface AppProps {
  navigation: any;
}
interface State {
  username: string | null;
  password: string | null;
}

export default class LoginScreen extends React.Component<AppProps, State> {
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
    const bgImage = require("../../../assets/splash.png");
    return (
      
        <ImageBackground 
          source={bgImage} 
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
            onPress={() => this.props.navigation.navigate('ActivityScreen')}
            style={[styles.button,{backgroundColor: "#ff9900", color: "white"}]}
            >
              Sign In!
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
              style={[styles.button,{backgroundColor: "white", color:"#263992"}]}
            >
              Forgot Password?
            </Button>
            <View style={[styles.socialContainer,{marginLeft:15}]}>
              <TouchableOpacity
                style={styles.ssoButtonHolder}
                onPress={() => this.props.navigation.navigate('ActivityScreen')}
              >
                <Image
                  source={require("../../../assets/ssi/google.png")}
                  style={styles.ssoIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ssoButtonHolder}
                onPress={() => this.props.navigation.navigate('ActivityScreen')}
              >
                <Image
                  source={require("../../../assets/ssi/facebook.png")}
                  style={styles.ssoIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ssoButtonHolder}
                onPress={() => this.props.navigation.navigate('ActivityScreen')}
              >
                <Image
                  source={require("../../../assets/ssi/twitter.png")}
                  style={styles.ssoIcon}
                />
              </TouchableOpacity>
            </View>
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
    paddingTop: 230,
    flexDirection: "column"
  },
  socialContainer: {
    flex: 0.8,
    alignItems: "flex-end",
    paddingVertical:60,
    position:"relative",
    flexDirection: "row"
  },
  ssoButtonHolder: {
    borderColor:'rgba(0,0,0,0.2)',
    width:80,
    height:60,
    borderRadius:50,
  },
  ssoIcon: {
    borderColor:'rgba(0,0,0,0.2)',
    width:60,
    height:60,
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
