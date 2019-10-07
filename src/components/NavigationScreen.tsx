import React, {Component} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavStyles from '../styles/NavStyles';
import UserSettingScreen from "./UserSettingScreen";
import WelcomeScreen from "./Welcome";
import MainScreen from "./MainScreen";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import ActivityScreen from "./BottomTabs/ActivityScreen";
import LectureScreen from "./BottomTabs/LectureScreen";
import Icon from '@expo/vector-icons/Ionicons';

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
    LectureScreen,
    ActivityScreen,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  },
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

const WelcomScreenStackNavigator = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  MainScreen: {
    screen: MainScreenStackNavigator
  },
  UserSettingScreen: {
    screen: UserSettingScreenStackNavigator
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
