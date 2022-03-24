import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import Popular from './screens/Popular'
import Recommendation from './screens/Recommendation'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const AppTabNavigator = createMaterialTopTabNavigator({
  Recommendedarticles:{
    screen:Recommendation,
    navigationOptions:{
      tabBarLabel:'Recommended',
      tabBarOptions:{
        tabBarStyle:{backgroundColor:'white'},
        labelStyle:{color:'black'},
        indicatorStyle:{backgroundColor:'black'}
      }
    }
  },
  Populararticles:{
    screen:Popular,
    navigationOptions:{
      tabBarLabel:'Popular',
      tabBarOptions:{
        tabBarStyle:{backgroundColor:'white'},
        labelStyle:{color:'black'},
        indicatorStyle:{backgroundColor:'black'}
      }
    }
  }
})
const AppStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  AppTopNavigator:{
    screen:AppTopNavigator,
    navigationOptions:{
      headerBackTitle:null,
      headerTintColor:'white',
      headerTitle:'Recommendedarticles',
      headerStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:RFValue(18)
      }
    }
  }
},{initialRouteName:'Home'})
const AppContainer = createAppContainer(AppStackNavigator)
