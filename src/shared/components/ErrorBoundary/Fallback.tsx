/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import React from 'react';
import { Pressable } from 'react-native';
import RNRestart from 'react-native-restart';

import { Box } from '../layout/Box';
import { Text } from '@shared/Typography';


/**
 * Restarts the app on press
 *  @returns {JSX.Element} The fallback UI to display when an error occurs.
 */
const handleRestart = () => {
  RNRestart.Restart();
};

/**
 * Fallback Screen for ErrorBoundary, this screen is displayed when the app crashes
 * due to an error in our component tree.
 *
 * @returns {JSX.Element} The fallback UI to display when an error occurs.
 */

const FallBack : React.FC = ()  =>{
  return (
    <Box flex={1} alignItems={"center"} justifyContent={"center"}>
      <Text marginVertical={"md"} variant={"medium20"}  >
        Oops 😞!
      </Text>
      <Text variant={"medium20"} >
        We Encountered an error,
      </Text>
      <Pressable onPress={handleRestart}>
        <Text>Restart the app</Text>
      </Pressable>
    </Box>
  );
};

export default FallBack;
