/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParameterList = {
  SplashScreen: undefined;
  LandingScreen: undefined;
  ProductLanding: undefined;
};

export type RootNavigationProps<Screen extends keyof RootStackParameterList> =
  NativeStackScreenProps<RootStackParameterList, Screen>;