/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */

import { Animated } from "react-native";

export const triggerShakeAnimation = (animValue: Animated.Value): void => {
  Animated.sequence([
    Animated.timing(animValue, {
      toValue: -10, // Move left
      duration: 100,
      useNativeDriver: true, // This option is required for performance
    }),
    Animated.timing(animValue, {
      toValue: 10, // Move right
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animValue, {
      toValue: -10, // Move left
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animValue, {
      toValue: 0, // Reset position
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start(); // Start the sequence
};
