import React, {Component} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavStyles from '../styles/NavStyles';
import UserSettingScreen from "./UserSettingScreen";
import AboutScreen from "./AboutScreen";
import WelcomeScreen from "./Welcome";
import LoginScreen from "./Authentication/LoginScreen";
import RegisterScreen from "./Authentication/RegisterScreen";
import MainScreen from "./MainScreen";
import OtpAuthenticationScreen from "./Authentication/OtpAutheticationScreen";
import ForgotPasswordScreen from "./Authentication/ForgotPasswordScreen";
import SetPasswordScreen from "./Authentication/SetPasswordScreen";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import ActivityScreen from "./BottomTabs/ActivityScreen";
import LectureScreen from "./BottomTabs/LectureScreen";
import CommunityScreen from "./BottomTabs/CommunityScreen";
import ChatScreen from "./BottomTabs/ChatScreen";
import Icon from '@expo/vector-icons/Ionicons';
import { fromRight } from "react-navigation-transitions";

export default class NavigationScreen extends Component {
  static navigationOptions = {
    title: "Frindi",
    alignItems: "center",
    ...NavStyles
  };
  render() {
    return (
      <AppContainer />
    );
  }
}

const MainScreenTabNavigator = createBottomTabNavigator(
  {
    LectureScreen:{
      screen: LectureScreen,
      navigationOptions: {
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-videocam" color={tintColor} size={25}/>
        )
      }
    },
    ActivityScreen: {
      screen: ActivityScreen,
      navigationOptions: {
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-switch" color={tintColor} size={25}/>
        )
      }
    },
    CommunityScreen: {
      screen: CommunityScreen,
    },
    ChatScreen: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon:({tintColor})=>(  
          <Icon name="ios-chatbubbles" color={tintColor} size={25}/>
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: "#ff9900"
        },
      };
    }
  }
);

const MainScreenStackNavigator = createStackNavigator(
  {
    Mainscreen: MainScreenTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const UserSettingScreenStackNavigator = createStackNavigator(
  {
    UserSettingScreen: UserSettingScreen
  },
);

const AboutScreenStackNavigator = createStackNavigator(
  {
    AboutScreen: AboutScreen
  },
);

const WelcomScreenStackNavigator = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    LoginScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
    OtpAuthenticationScreen: OtpAuthenticationScreen,
    ForgotPasswordScreen: ForgotPasswordScreen,
    SetPasswordScreen: SetPasswordScreen
  },
  {
    transitionConfig: () => fromRight(300)
  }
  
);

const AppDrawerNavigator = createDrawerNavigator({
  MainScreen: {
    screen: MainScreenStackNavigator
  },
  UserSettingScreen: {
    screen: UserSettingScreenStackNavigator
  },
  AboutScreen: {
    screen: AboutScreenStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomScreenStackNavigator },
  MainScreen: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#263992",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
});
