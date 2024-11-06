/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import { TextInputProps } from "react-native";


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
    inputBoxProps?: string;
    labelProps?: string;
    onFocus?: () => void;
    errorMessage?: null | undefined | string | boolean;
    onBlur?:
      | ((event: NativeSyntheticEvent<TextInputFocusEventData>) => void)
      | undefined;
    placeholderTextColor?: string;
    inputColor?: string;
  };