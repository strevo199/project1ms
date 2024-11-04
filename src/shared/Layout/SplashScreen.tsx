import React, { FC, useEffect } from 'react';
import { Box } from './Box';
import { Image, StatusBar } from 'react-native';
import { imageIconPack } from '../../assets/images';
import * as Animatable from 'react-native-animatable';
import { RootNavigationProps } from '../navigation/types';

const SplashScreen: FC<RootNavigationProps<'SplashScreen'>> = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('LandingScreen');
      }, 6000);
    }, []);

  return (
    <>
    <StatusBar hidden />
    <Box backgroundColor={'splashScreenColor'} alignItems={'center'} flex={1} justifyContent={'center'} >
        <Animatable.Image  iterationDelay={1000} animation={'zoomIn'} iterationCount="infinite" style={{height:100,width:100}}  source={imageIconPack.applogo} />
    </Box>
    </>
  );
};

export default SplashScreen;

