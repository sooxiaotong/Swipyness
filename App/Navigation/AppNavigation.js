import { StackNavigator, TabNavigator } from 'react-navigation'
import Rank from '../Containers/Rank'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { Colors } from '../Themes'
import Login from '../Containers/Login'
import Profile from '../Containers/Profile'
import Chat from '../Containers/Chat'
import Post from '../Containers/Post'
import Store from '../Containers/Store'
import Home from '../Containers/Home'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const DrawerNav = TabNavigator({
  Profile: { screen: Profile, navigationOptions: ({ navigation }) => ({
        title: "Profile",
        tabBarIcon: ({ tintColor }) => <Icon name="md-person" size={25} color={tintColor} />
      }) },
  Chat: { screen: Chat, navigationOptions: ({ navigation }) => ({
        title: "Chat",
        tabBarIcon: ({ tintColor }) => <Icon name="md-chatbubbles" size={25} color={tintColor} />
      }) },
  Post: { screen: Post, navigationOptions: ({ navigation }) => ({
        title: "Post",
        tabBarIcon: ({ tintColor }) => <Icon name="md-add" size={25} color={tintColor} />
      }) },
  Store: { screen: Store, navigationOptions: ({ navigation }) => ({
        title: "Store",
        tabBarIcon: ({ tintColor }) => <Icon name="md-cube" size={25} color={tintColor} />
      }) },
  Home: { screen: Home, navigationOptions: ({ navigation }) => ({
        title: "Home",
        tabBarIcon: ({ tintColor }) => <Icon name="md-albums" size={25} color={tintColor} />
      }) },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'Home',
  order: ["Home", "Store", "Post", "Chat", "Profile"],

  tabBarPosition: 'bottom',
  tabBarOptions: {
      activeTintColor: Colors.coal,
      inactiveTintColor: Colors.dark,
      showLabel: false,
      showIcon: true,
      upperCaseLabel: false,
      pressColor: Colors.clear,
      scrollEnabled: false,
      tabStyle: styles.tab,
      indicatorStyle: styles.indicator,
      labelStyle: styles.label,
      iconStyle: styles.icon,
      style: styles.tabBar
  }
})

const PrimaryNav = StackNavigator({
  Home: { screen : DrawerNav,navigationOptions: {
    header: null
  } },
  Rank: { screen: Rank },
  Login: { screen: Login },
},{
  headerMode: 'screen',
})

export default PrimaryNav
