/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */

import React, { forwardRef } from "react";
import { TextInput, TextInputProps, useWindowDimensions } from "react-native";

export interface MyTextInputProps extends TextInputProps {
  // Add your custom default props here
  customProp?: string;
}

const MyTextInput = forwardRef<TextInput, MyTextInputProps>(
  ({  ...props }, ref) => {
    const deviceFontScale = Number(useWindowDimensions().fontScale.toFixed(1));

    // Determine maxFontSizeMultiplier based on deviceFontScale
    let maxFontSizeMultiplier: number;
    if (deviceFontScale >= 1.4) {
      maxFontSizeMultiplier = 1.2;
    } else if (deviceFontScale >= 1.2) {
      maxFontSizeMultiplier = 1.1;
    } else {
      maxFontSizeMultiplier = 1;
    }

    // Set default props for TextInput
    const textInputProps: TextInputProps = {
      ...props,
      // Placeholder: "Enter here",
      multiline: false,
      allowFontScaling: false,
      // Add other default props here
      maxFontSizeMultiplier,
    };

    // Pass the props to the original TextInput component
    return <TextInput {...textInputProps} ref={ref} />;
  },
);


export default MyTextInput;
