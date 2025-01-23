/* eslint-disable react-native/no-inline-styles */
/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */

import React, {useEffect} from 'react';
import {Animated, Easing, TouchableOpacity} from 'react-native';

import {PrimaryButtonProps} from './type';
import {Text} from '@shared/Typography';
import {Box} from '../layout/Box';
import SrfValue from '@shared/utilities/functions/SrfValue';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  disabled,
  onPress,
  isLoading,
  title,
  btnalign,
  touchableOpacityProps,
  btnBoxProps,
  btnTitleProps,
}) => {
  const animation1 = new Animated.Value(0);
  const animation2 = new Animated.Value(0);
  const animation3 = new Animated.Value(0);

  useEffect(() => {
    if (isLoading) {
      startAnimation();
    }
  }, [isLoading]);

  const startAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(animation1, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animation2, {
          toValue: 1,
          duration: 1000,
          delay: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animation3, {
          toValue: 1,
          duration: 1000,
          delay: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  const translateY1 = animation1.interpolate({
    inputRange: [0, 0.5, 1], // Mapping the value of 0, 0.5, 1
    outputRange: [0, -10, 0], // Mapping it to translateY values (original position, up, original)
  });
  const translateY2 = animation2.interpolate({
    inputRange: [0, 0.5, 1], // Mapping the value of 0, 0.5, 1
    outputRange: [0, -10, 0], // Mapping it to translateY values (original position, up, original)
  });
  const translateY3 = animation3.interpolate({
    inputRange: [0, 0.5, 1], // Mapping the value of 0, 0.5, 1
    outputRange: [0, -10, 0], // Mapping it to translateY values (original position, up, original)
  });

  const animateStyle1 = {
    transform: [{translateY: translateY1}],
  };
  const animateStyle2 = {
    transform: [{translateY: translateY2}],
  };
  const animateStyle3 = {
    transform: [{translateY: translateY3}],
  };
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled || isLoading}
      style={{
        alignSelf: btnalign,
        paddingVertical: SrfValue(5),
      }}
      onPress={onPress}
      {...touchableOpacityProps}>
      <Box
        backgroundColor={isLoading ? 'primary10' : 'textColorInverted'}
        borderRadius={'xl'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        height={SrfValue(48)}
        {...btnBoxProps}>
        {!isLoading ? (
          <Text variant={'bold16'} letterSpacing={0.7} color={'white'} {...btnTitleProps}>
            {title}
          </Text>
        ) : (
          <Box flexDirection={'row'} alignItems={'center'} gap={'xs'}>
            <Animated.View
              style={{
                height: SrfValue(5),
                w: SrfValue(5),
                backgroundColor: '#fff',
                ...animateStyle1,
              }}
            />
            <Animated.View
              style={{
                height: SrfValue(3),
                w: SrfValue(3),
                backgroundColor: '#fff',
                ...animateStyle2,
              }}
            />
            <Animated.View
              style={{
                height: SrfValue(3),
                w: SrfValue(3),
                backgroundColor: '#fff',
                ...animateStyle3,
              }}
            />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
