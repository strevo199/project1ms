/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import { StyledProps } from "nativewind";
import { BoxProps } from "../Layout/Box";
import { TextProps } from "@shared/Typography";

interface PrimaryButtonProps extends StyledProps<ViewProps> {
    title: string;
    disabled?: boolean;
    btnalign?:string;
    isLoading?: boolean;
    touchableOpacityProps?: TouchableOpacityProps;
    onPress?: TouchableOpacityProps["onPress"];
    btnBoxProps?: BoxProps;
    btnTitleProps?: TextProps;
  }