import React from 'react';
import { Box } from '@shared/components/layout/Box';
import { Text } from '@shared/Typography';
import { Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import SimpleInput from '@shared/components/textInput/SimpleInput';
import { initialValues, loginValidationSchema } from './login.logic';
import { Formik } from 'formik';
import PrimaryButton from '@shared/components/button/PrimaryButton';
import { ImageIcon } from '@assets/icons/ImageIcon';

const LoginComponent = ({backaction}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, handleSubmit) => {
          Keyboard.dismiss();
        }}
        validationSchema={loginValidationSchema}>
        {({ handleSubmit, errors, touched, handleChange, values }) => (
          <Box    height={'100%'}>
            <Box flexDirection={'row'} justifyContent={'space-between'} marginBottom={'md'}>
              <TouchableOpacity onPress={backaction} style={{padding:6,paddingLeft:0}} >
              <ImageIcon name='arrowLeft' size='md' style={{borderRadius:20}} />
              </TouchableOpacity>
              <ImageIcon  name='appicon' size='lg' style={{borderRadius:20}} />
            </Box>
            <Box  rowGap={'lg'}  >
              <Text variant={'medium16'}>Please Provide Email and password in order to sign in</Text>
              <Box marginTop={'lg'}>
                <SimpleInput keyboardType="email-address" errorMessage={touched.email && errors.email} onChangeText={handleChange('email')} label="Email" value={values.email}
                />
                <SimpleInput errorMessage={touched.password && errors.password} value={values.password} onChangeText={handleChange('password')} isPassword label="Password"
                />
              </Box>
            </Box>
            <Box marginTop={'xxl'}>
              <PrimaryButton onPress={handleSubmit} title="Log in" />

            </Box>
          </Box>
        )}

      </Formik>

    </TouchableWithoutFeedback>
  );
};

export default LoginComponent;
