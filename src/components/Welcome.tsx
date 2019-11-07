import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import NavStyles from '../styles/NavStyles';
import { Button, Text } from "react-native-paper";

interface AppProps {
  navigation: any;
}

export default class Welcome extends React.Component<AppProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    const bgImage = require("../../assets/splash.png");
    return (
      
      <ImageBackground 
        source={bgImage} 
        style={styles.background}
      >
        <View
          style={{flex:1, flexDirection:"column", alignContent: "center", alignItems: "center"}}
        >
          <View style={styles.logoView}>
            <Image
              source={require("../../assets/logo_frindi.png")}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.container}>
            <Button
              onPress={() => this.props.navigation.navigate('LoginScreen')}
              style={[styles.button,{backgroundColor: "#ff9900"}]}
            >
              <Text style={{color: "white"}}>
                Already Have Account!
              </Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
              style={[styles.button,{backgroundColor: "white"}]}
            >
              <Text style={{color:"#263992"}}>
                Need New Account?
              </Text>
            </Button>
            <Text
              style={{marginTop:10, color:"cyan", fontFamily:"sans-serif",}}
            > 
              Learn french through hindi
            </Text>
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
    paddingTop: 150,
    flexDirection: "column"
  },
  logoView: {
    flexDirection:"row",
    alignItems:"stretch",
    alignContent: "center",
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    marginTop:140,
    height:150,
    width:300,
    borderRadius:10,
  },
  logoImage: {
    marginHorizontal:30,
    marginTop:2,
    height:"auto",
    width:"83%",
    borderRadius:1
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
