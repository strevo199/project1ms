

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './RootNavigation';
import { navigationRef } from './AltNavigation';


const  Navigation :React.FC = () => {
  return (
    <NavigationContainer  ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
