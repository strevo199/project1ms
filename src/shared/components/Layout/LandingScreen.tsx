import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, ImageBackground, StatusBar } from 'react-native';
import { palette } from '@shared/theme/palette';
import { Box } from './Box';
import PrimaryButton from '../button/PrimaryButton';
import { imageIconPack } from '@assets/icons/imageIconPack';
import { Dimensions } from 'react-native';
import LoginComponent from '@module/authenication/LoginComponent';
import { RootNavigationProps } from '@shared/navigation/types';

const LandingScreen : FC<RootNavigationProps<'LandingScreen'>> = ({navigation}) =>  {
  const [translateY] = useState(new Animated.Value(0));
  const [translateX] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(1));

  const [mode, setMode] = useState<'landing' | 'login' | 'register'>('');
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    // Start the animation when the component mounts
    startAnimation();
  }, []);

  // Get screen dimensions

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.9,
        duration: 1000,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -height * 0.05,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start(() => {
      setMode('landing');
    });
  };

  const animationToLogin = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 800,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -height * 0.5,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(translateX, {
        toValue: width * 0.4,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start(() => {
      setMode('login');
    });
  };

  const animateStyle1 = {
    transform: [
      {scale},
      {translateX},
      { translateY },
    ],
  };

  return (
    <>
      <StatusBar  barStyle={'dark-content'} translucent backgroundColor={palette.transparent} />
      <ImageBackground
        source={imageIconPack.loginbackground}
        style={{flex:1, justifyContent: 'flex-end' }}
      >
        <Animated.Image
          source={imageIconPack.appicon}
          style={{height: 45,alignSelf:'center',top:'55%', position:'absolute', width: 45,borderRadius:50, ...animateStyle1}} // Animated.Image to apply animated style
        />
       {mode === 'landing' &&  <Box marginBottom={'lg'} rowGap={'xs'} paddingHorizontal={'md'} >
            <PrimaryButton onPress={animationToLogin} title="Log in" />
            <PrimaryButton onPress={() => navigation.replace("ProductLanding")} btnTitleProps={{color:'textColorInverted'}}  title="Register" btnBoxProps ={{backgroundColor:'transparent',borderWidth:1,borderColor:'textColorInverted'}} />
            <PrimaryButton  btnTitleProps={{color:'textColorInverted'}} title="Skip and continue as a guest" btnBoxProps ={{backgroundColor:'transparent'}} />
        </Box>}
       {mode === 'login' && <LoginComponent/>}
       {mode === 'register' && <LoginComponent/>}
      </ImageBackground>
    </>
  );
};

export default LandingScreen;
