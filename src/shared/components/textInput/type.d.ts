/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */

import { TextInputProps } from "react-native";
import { BoxProps } from "../layout/Box";
import { TextProps } from "@shared/Typography";


type SimpleInputProps = TextInputProps & {
    value?: string | number;
    inputProps?: TextInputProps;
    label?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    maxLength?: number;
    isPassword?: boolean;
    hasToolTip?: boolean;
    editable?: boolean;
    keyboardType?: TextInputProps["keyboardType"];
    inputBoxProps: BoxProps;
    labelProps?: TextProps;
    onFocus?: () => void;
    errorMessage?: null | undefined | string | boolean;
    onBlur?:
      | ((event: NativeSyntheticEvent<TextInputFocusEventData>) => void)
      | undefined;
    placeholderTextColor?: string;
    inputColor?: string;
  };