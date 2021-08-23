import React from 'react';
import {Home} from "./src/pages/Home"
import {About} from "./src/pages/About"
import {LevelSection} from "./src/pages/LevelSection"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen
          name="Home"
          component={Home}
          screenOptions={{
            headerShown: false}}/>

      <Stack.Screen
          name="About"
          component={About}
          screenOptions={{
            headerShown: false}}/>

      <Stack.Screen
          name="LevelSection"
          component={LevelSection}
          screenOptions={{
            headerShown: false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}