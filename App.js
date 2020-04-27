import 'react-native-gesture-handler';
import React, {Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main'
import Ecommerce from './components/Categories/Ecommerce'
import Food from './components/Categories/Food'
import InternetProviders from './components/Categories/InternetProviders'
import Magazine from './components/Categories/Magazine'
import Marketplace from './components/Categories/Marketplace'
import ServiceProviders from './components/Categories/ServiceProviders'
import Sport from './components/Categories/Sport'
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();
const Home = () =>  {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#E0E0E0'}}}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Ecommerce" component={Ecommerce} />
          <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="InternetProviders" component={InternetProviders} />
          <Stack.Screen name="Magazine" component={Magazine} />
          <Stack.Screen name="Marketplace" component={Marketplace} />
          <Stack.Screen name="ServiceProviders" component={ServiceProviders} />
          <Stack.Screen name="Sport" component={Sport} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Home;

