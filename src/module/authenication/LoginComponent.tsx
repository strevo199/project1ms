import React from 'react';
import { Box } from '@shared/components/layout/Box';
import { Text } from '@shared/Typography';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import SimpleInput from '@shared/components/textInput/SimpleInput';
import { initialValues, loginValidationSchema } from './login.logic';
import { Formik } from 'formik';
import PrimaryButton from '@shared/components/button/PrimaryButton';

const LoginComponent = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, handleSubmit) => {
          Keyboard.dismiss();
        }}
        validationSchema={loginValidationSchema}>
        {({ handleSubmit, errors, touched, handleChange, values }) => (
          <Box justifyContent={'space-between'} padding={'md'}  height={'85%'}>
            <Box  rowGap={'lg'}  >
              <Text textAlign={'center'} variant={'medium18'}>Please Provide Email and password in order {'\n'} to sign in</Text>
              <Box marginTop={'lg'}>
                <SimpleInput keyboardType="email-address" errorMessage={touched.email && errors.email} onChangeText={handleChange('email')} label="Email" value={values.email}
                />
                <SimpleInput errorMessage={touched.password && errors.password} value={values.password} onChangeText={handleChange('password')} isPassword label="Password"
                />

              </Box>
            </Box>
            <Box>
              <PrimaryButton onPress={handleSubmit} title="Log in" />

            </Box>
          </Box>
        )}

      </Formik>

    </TouchableWithoutFeedback>
  );
};

export default LoginComponent;
