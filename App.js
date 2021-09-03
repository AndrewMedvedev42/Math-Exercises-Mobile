import React from 'react';
import {Home} from "./src/pages/Home"
import {How_To_Fill_Answers_Screen} from "./src/pages/How_To_Fill_Answers_Screen"
import {LevelSection} from "./src/pages/LevelSection"
import {ExerciseTemplate} from "./src/pages/Exercise"
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
          name="How_To_Fill_Answers_Screen"
          component={How_To_Fill_Answers_Screen}
          screenOptions={{
            headerShown: false}}/>

    <Stack.Screen
          name="LevelSection"
          component={LevelSection}
          screenOptions={{
            headerShown: false}}/>
      
      <Stack.Screen
          name="Exercise"
          component={ExerciseTemplate}
          screenOptions={{
            headerShown: false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}