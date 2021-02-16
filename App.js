import React, { Component, Fragment } from 'react';
import Header from './component/Header'
import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Image, Platform, StatusBar, TouchableOpacity, RecyclerViewBackedScrollViewComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import ForYouScreen from './Screens/ForYouScreen'
import HomeScreen from './Screens/HomeScreens'
import LocalScreen from './Screens/LocalScreen'
import TrendingScreen from './Screens/TrendingScreen'
import GlobalScreen from './Screens/GlobalScreen';
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ReadMoreScreen from './Screens/ReadMoreScreen';
import AboutUsScreen from './Screens/AboutUsScreen';

export default function App() {
  const Drawer = createDrawerNavigator()
  const HomeStack = createStackNavigator()
  const GlobalStack = createStackNavigator()
  const BottomTab = createMaterialBottomTabNavigator()
  const Tab = createMaterialTopTabNavigator()

  const HomeStackScreen = ({ navigation }) => {
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'darkgreen'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }

      }}>
        <HomeStack.Screen name='Home' component={MyTabScreen} options={{
          headerRight: () => <Ionicons name='menu' size={35} color='white' onPress={() =>
            navigation.openDrawer()
          } />
        }} />
      </HomeStack.Navigator>
    )
  }

  const GlobalStackScreen = ({ navigation }) => {
    return (
      <GlobalStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'darkgreen'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}>



        <GlobalStack.Screen name='Global' component={GlobalScreen} options={{
          headerRight: () => <Header navigation={navigation} />
        }} />
      </GlobalStack.Navigator>
    )
  }


  function MyTabScreen() {
    return (<Fragment>

      <Tab.Navigator
        initialRouteName="All"

        tabBarOptions={{
          activeTintColor: 'black',
          labelStyle: {
            fontSize: 11,
            fontWeight: 'bold'


          },

          style: {
            backgroundColor: 'white',
            margin: 1

          },


        }}


      >
        <Tab.Screen
          name="All"
          component={HomeScreen}
          options={{ tabBarLabel: 'All' }}
        />
        <Tab.Screen
          name="Global"
          component={GlobalScreen}
          options={{
            tabBarLabel: 'Global',

          }
          }
        />
        <Tab.Screen
          name="Local"
          component={LocalScreen}
          options={{ tabBarLabel: 'Local' }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingScreen}
          options={{ tabBarLabel: 'Trending' }}
        />




      </Tab.Navigator>
    </Fragment>
    );
  }
  return (

    <Fragment>

      <StatusBar backgroundColor='green' />


      <NavigationContainer>

        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={HomeStackScreen} />
          <Drawer.Screen name='Global' component={GlobalStackScreen} />
        </Drawer.Navigator>

      </NavigationContainer>
    </Fragment>


  );
}

const styles = StyleSheet.create({
  upper: {
    flex: 0,
    backgroundColor: 'red',


  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',

  }

});

