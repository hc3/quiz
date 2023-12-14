import AboutScreen from './src/screens/about';
import CreateStudent from './src/screens/create_student';
import GameScreen from './src/screens/game';
import HomeScreen from './src/screens/home';
import LoginScreen from './src/screens/login';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StatisticScreen from './src/screens/statistic';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Navigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateStudent" component={CreateStudent} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Game" component={GameScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Statistic" component={StatisticScreen} options={{headerShown:false}}/>
        <Stack.Screen name="About" component={AboutScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator