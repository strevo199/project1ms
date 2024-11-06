/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import React from 'react';
import { Text, TextProps } from 'react-native';

import { styled,StyledProps  } from 'nativewind';

interface MyTextProps extends StyledProps<TextProps> {
  children: React.ReactNode;
}


const SemiboldText : React.FC<MyTextProps> = styled(({ children, className, ...rest }) => (
  <Text allowFontScaling={false} className={`text-base font-semibold text-secondary ${className}`} {...rest}>
    {children}
  </Text>
));


const BoldText : React.FC<MyTextProps> = styled(({ children, className, ...rest }) => (
  <Text allowFontScaling={false} className={` text-base font-bold text-secondary ${className}`} {...rest}>
    {children}
  </Text>
));


const RegularText : React.FC<MyTextProps> = styled(({ children, className, ...rest }) => (
  <Text allowFontScaling={false} className={` text-base text-secondary ${className}`} {...rest}>
    {children}
  </Text>
));


const MediumText : React.FC<MyTextProps> = styled(({ children, className, ...rest }) => (
  <Text allowFontScaling={false} className={` text-base  font-medium text-secondary ${className}`} {...rest}>
    {children}
  </Text>
));





export { SemiboldText,BoldText,RegularText,MediumText };
