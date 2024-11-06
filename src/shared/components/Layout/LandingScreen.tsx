import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, ImageBackground, StatusBar } from 'react-native';
import { imageIconPack } from '../../../assets/images';
import { palette } from '@shared/theme/palette';
import { Box } from './Box';
import PrimaryButton from '../button/PrimaryButton';

const LandingScreen = () => {
  const translateY = new Animated.Value(0);
  const scale = new Animated.Value(1);
const show = useRef<"flex"|"none">(null);
  useEffect(() => {
    // Start the animation when the component mounts
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.8,
        duration: 1000,
        delay:200,
        useNativeDriver: false,
      }),
      Animated.timing(translateY, {
        toValue: -100,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  };

  const animateStyle1 = {
    transform: [
      {scale},
      { translateY },
    ],
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={palette.transparent} />
      <ImageBackground
        source={imageIconPack.loginbackground}
        style={{flex:1, justifyContent: "flex-end", }}
      >
        <Animated.Image
          source={imageIconPack.appicon}
          style={{height: 45,alignSelf:"center",top:"55%", position:"absolute", width: 45,borderRadius:50, ...animateStyle1}} // Animated.Image to apply animated style
        />
        <Box marginBottom={"lg"} >
            <PrimaryButton title='Log in' />
            <PrimaryButton btnBoxProps ={{backgroundColor:"transparent",borderWidth:1}} btnTitleProps={{color:"primaryColor"}}  title='Register' />
            <PrimaryButton btnBoxProps ={{backgroundColor:"transparent"}} btnTitleProps={{color:"primaryColor"}} title='Skip and continue as a guest' />
            {/* <PrimaryButton title='Log in' /> */}
            {/* <PrimaryButton title='Log in' /> */}
        </Box>
      </ImageBackground>
    </>
  );
};

export default LandingScreen;
