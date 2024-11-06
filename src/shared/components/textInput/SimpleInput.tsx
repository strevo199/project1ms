/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { ImageIcon } from "@/src/assets/icons/ImageIcon";
import NewErrorText from "@core/utilities/Error/NewErrorText";
import { triggerShakeAnimation } from "@core/utilities/triggerShakeAnimation";

import { Box } from "../layout/Box";
import { MediumText } from "../Typography";
import { SimpleInputProps } from "./type";



const SimpleInput: React.FC<SimpleInputProps> = ({
  inputProps,
  isPassword,
  value = "",
  onChangeText,
  keyboardType = "default",
  labelProps,
  label,
  onFocus = () => {
    // Placeholder for future implementation
  },
  errorMessage = null,
  onBlur = () => {
    // Placeholder for future implementation
  },
  maxLength,
  placeholder,
  placeholderTextColor = "#9CA3AF",
  inputBoxProps,
  editable,
}) => {
  const ref = React.useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(isPassword);
  const [labelShifting, setlabelShifting] = useState("top-5 text-sm");
  const borderColorAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    Animated.timing(borderColorAnim, {
      toValue: 1, // Transition to purple
      duration: 300,
      useNativeDriver: false, // Can't animate borderColor using native driver
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(borderColorAnim, {
      toValue: 0, // Transition back to grey
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#d1d5db', '#a855f7'], // Grey when not focused, Purple when focused
  });

  const animValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (errorMessage) {
      triggerShakeAnimation(animValue);
    }
  }, [animValue, errorMessage]);

  useEffect(() => {
    if (value?.trim()) {
      setlabelShifting("top-1 text-xxs");
    }
  }, [value])

  const bColor = useMemo(
    () => (errorMessage ? "#ef4444"  : "#d1d5db"),
    [errorMessage],
  );

  return (
    <Box className=" mb-4">
       <Animated.View style ={{borderColor: errorMessage ? bColor : borderColor }} className={` relative mb-1  rounded-2xl   border-1`}>
        <MediumText
          className={` absolute left-4  text-secondary-400 ${labelShifting} ${labelProps}`}>
          {label}
        </MediumText>
        {/* </Box> */}
        <Box className={`${inputBoxProps}`}>
          <TextInput
            ref={ref}
            secureTextEntry={showPassword}
            onBlur={event => {
              handleBlur();
              onBlur(event);
            }}
            autoComplete="off"
            onChangeText={text => {
              onChangeText?.(text);
            }}
            onFocus={() => {
              handleFocus();
              setlabelShifting("top-1 text-xxs");
              onFocus();
            }}
            value={value}
            autoCapitalize="none"
            keyboardType={keyboardType}
            editable={editable}
            autoCorrect={false}
            maxLength={maxLength}
            style={{
              height: 52,
              color: "#1f2937",
              fontSize: 16,
              paddingLeft: 16,
              textAlignVertical: 'bottom',
              fontWeight: "500", lineHeight: 20,
              backgroundColor: "transparent",
              letterSpacing: 0.7,
            }}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            {...inputProps}
          />
          {isPassword && (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{position: "absolute", right: 10,top: 20, }}>
              <ImageIcon
                style={{ height: 13, width: 20 }}
                name={!showPassword ? "eyeclose" : "eyeopen"}
              />
            </TouchableOpacity>
          )}
        </Box>
        </Animated.View>
      {errorMessage && <NewErrorText error={errorMessage} />}
    </Box> ); };
export default SimpleInput;
