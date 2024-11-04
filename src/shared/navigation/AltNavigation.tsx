/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

// import { RefererType } from "@/core/store/slices/appSettings.slice";
import { createNavigationContainerRef, StackActions } from "@react-navigation/native";



export const navigationRef = createNavigationContainerRef();



export const NavReplace = (referer: any):void => {
  const { screen, params = {}, stack } = referer;
  if (navigationRef.isReady()) {
    if (stack) {
      navigationRef.dispatch(StackActions.replace(stack, { screen, params }));
      return;
    }
    navigationRef.dispatch(StackActions.replace(screen, params));
  } else {
    // Console.warn("Navigation reference is not ready");
  }
}