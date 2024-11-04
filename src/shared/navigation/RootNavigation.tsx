import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Layout/SplashScreen';
import { RootStackParameterList } from './types';
import LandingScreen from '../Layout/LandingScreen';


const Stack = createNativeStackNavigator<RootStackParameterList>();


const RootNavigation : React.FC = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: 'pop',
          animation: 'fade',
          // AnimationDuration: 150,
        }}>
        <Stack.Screen component={SplashScreen} name="SplashScreen"/>
        <Stack.Screen component={LandingScreen} name="LandingScreen"/>
      </Stack.Navigator>
    );
  };

  export default RootNavigation;
