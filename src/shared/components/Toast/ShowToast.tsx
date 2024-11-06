/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import { MessageType, showMessage } from "react-native-flash-message";
// Message is the headline Warning or Error or Success
// The s=description should be success or error message or the content of your warning
// The type is fixed,  warning | success | danger | info
export const ShowToast = ({
  message,
  type = "default",
  autoHide = true,
  duration,
}:{
  message: string;
  type?: MessageType;
  autoHide?: boolean;
  duration?: number;
}): void => {
  const defaultMessage = "An error occurred. Please try again.";
  const isMessageString = typeof message === "string";

  showMessage({
    message: "",
    duration: duration ?? 5000,
    description: isMessageString ? message : defaultMessage,
    type,
    autoHide,
  });
};
