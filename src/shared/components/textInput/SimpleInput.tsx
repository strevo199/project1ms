/* eslint-disable react-native/no-inline-styles */
/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import { SimpleInputProps } from './type';
import { Box } from '../layout/Box';
import { Text } from '@shared/Typography';
import { palette } from '@shared/theme/palette';
import { ImageIcon } from '@assets/icons/ImageIcon';
import { triggerShakeAnimation } from '@shared/utilities/triggerShakeAnimation';
import NewErrorText from '@shared/utilities/Error/NewErrorText';
import SrfValue from '@shared/utilities/functions/SrfValue';



const SimpleInput: React.FC<SimpleInputProps> = ({
  inputProps,
  isPassword,
  value = '',
  onChangeText,
  keyboardType = 'default',
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
  placeholderTextColor = '#9CA3AF',
  inputBoxProps,
  editable,
}) => {
  const ref = React.useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(isPassword);
  const [labelShifting, setlabelShifting] = useState(false);
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
    outputRange: ['#d1d5db', palette.focus], // Grey when not focused, Purple when focused
  });

  const animValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (errorMessage) {
      triggerShakeAnimation(animValue);
    }
  }, [animValue, errorMessage]);

  useEffect(() => {
    if (value?.trim()) {
      setlabelShifting(true);
    }
  }, [value]);

  const bColor = useMemo(
    () => (errorMessage ? palette.danger  : palette.secondary500),
    [errorMessage],
  );

  return (
    <Box marginBottom={'md'} >
       <Animated.View style ={{position:'relative',borderWidth:1, borderRadius:16,marginBottom:1,borderColor: errorMessage ? bColor : borderColor }} >
        <Text
        style={labelShifting ? {position:'absolute',left:SrfValue(12),top:SrfValue(5),fontSize:SrfValue(12)}: {position:'absolute',left:SrfValue(12),top:SrfValue(15),fontSize:SrfValue(14)}}
          >
          {label}
        </Text>
        <Box {...inputBoxProps}>
          <TextInput
            ref={ref}
            secureTextEntry={showPassword}
            onBlur={event => {
              handleBlur();
              onBlur(event);
              if (!value?.trim()) {
                setlabelShifting(false);
              }
            }}
            autoComplete="off"
            onChangeText={text => {
              onChangeText?.(text);
            }}
            onFocus={() => {
              handleFocus();
              setlabelShifting(true);
              onFocus();
            }}
            value={value}
            autoCapitalize="none"
            keyboardType={keyboardType}
            editable={editable}
            autoCorrect={false}
            maxLength={maxLength}
            style={{
              height: SrfValue(52),
              color: '#1f2937',
              fontSize: SrfValue(16),
              paddingLeft: SrfValue(12),
              textAlignVertical: 'bottom',
              fontWeight: '500', lineHeight: SrfValue(20),
              backgroundColor: 'transparent',
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
              style={{position: 'absolute', right: SrfValue(10),top: SrfValue(20) }}>
              <ImageIcon
                style={{ height: SrfValue(13), width: SrfValue(20),tintColor:palette.focus }}
                name={!showPassword ? 'eyeclose' : 'eyeopen'}
              />
            </TouchableOpacity>
          )}
        </Box>
        </Animated.View>
      {errorMessage && <NewErrorText error={errorMessage} />}
    </Box> ); };
export default SimpleInput;
