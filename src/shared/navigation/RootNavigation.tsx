import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParameterList } from './types';
import SplashScreen from '@shared/components/layout/SplashScreen';
import LandingScreen from '@shared/components/layout/LandingScreen';
import ProductLanding from '@module/products/ProductLanding';
import HymmsLanding from '@module/hymms/HymmsLanding';
import HymmsContentScreen from '@module/hymms/HymmsContentScreen';
import HymmsList from '@module/hymms/HymmsList';
import Hymm from '@module/hymms/Hymm';
import EventsLanding from '@module/events/EventsLanding';

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
        <Stack.Screen component={ProductLanding} name="ProductLanding"/>
        <Stack.Screen component={HymmsLanding} name="HymmsLanding"/>
        <Stack.Screen component={HymmsContentScreen} name="HymmsContentScreen"/>
        <Stack.Screen component={HymmsList} name="HymmsList"/>
        <Stack.Screen component={Hymm} name="Hymm"/>
        <Stack.Screen component={EventsLanding} name="EventsLanding"/>
      </Stack.Navigator>
    );
  };

  export default RootNavigation;
