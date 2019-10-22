import React from "react";
import { TextInput, StyleSheet, View, Text, ImageBackground } from "react-native";
import NavStyles from '../../styles/NavStyles';
import Button from "react-native-button";

interface AppProps {
  navigation: any;
}
interface State {
  otp: string | null;
}

export default class OtpAuthenticationScreen extends React.Component<AppProps, State> {
  static navigationOptions = {
    title: "Otp",
    ...NavStyles
  };

  constructor(props) {
    super(props);
    
    this.state = {
      otp: ''
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
          <Text style={styles.text}>Please Enter Otp</Text>
          
          <TextInput
            value={this.state.otp}
            onChangeText={(otp) => this.setState({ otp })}
            placeholder={'Otp'}
            style={styles.input}
          />
          
          <Button
            style={[styles.button,{backgroundColor: "#ff9900", color: "white"}]}
            onPress={() => this.props.navigation.navigate('SetPasswordScreen')}
          >
            Set Password
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
