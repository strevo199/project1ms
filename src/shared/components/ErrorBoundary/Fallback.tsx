/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import React from "react";
import { Pressable } from "react-native";
import RNRestart from "react-native-restart";

import { Box } from "../layout/Box";
import {MediumText, RegularText } from "../Typography";


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

const FallBack : React.FC =()  =>{
  return (
    <Box className=" flex flex-1 items-center justify-center">
      <MediumText className=" my-8 text-xl text-secondary-800" >
        Oops 😞!
      </MediumText>
      <MediumText className=" text-lg text-secondary-800">
        We Encountered an error,
      </MediumText>
      <Pressable onPress={handleRestart}>
        <RegularText>Restart the app</RegularText>
      </Pressable>
    </Box>
  );
}

export default FallBack;
