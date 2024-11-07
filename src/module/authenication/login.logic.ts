/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import * as yup from "yup";

export const initialValues: LoginRequest = {
  email: "",
  password: "",
  app:""
};

export const loginValidationSchema = yup.object().shape({
    password: yup.string().required("password is required"),
    email: yup
    .string()
    .required("Please Enter your Email").email().label("Email"),
});


