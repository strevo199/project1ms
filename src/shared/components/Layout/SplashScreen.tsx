import React, { FC, useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import { imageIconPack } from '../../../assets/images';
import { RootNavigationProps } from '../../navigation/types';
import { Box } from './Box';

const SplashScreen: FC<RootNavigationProps<'SplashScreen'>> = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('LandingScreen');
      }, 4000);
    }, []);

  return (
    <>
    <StatusBar hidden />
    <Box backgroundColor={'splashScreenColor'} alignItems={'center'} flex={1} justifyContent={'center'} >
        <Image style={{height:50,width:50}}  source={imageIconPack.applogo} />
        {/* <Animatable.Image  iterationDelay={1000} animation={'zoomIn'} iterationCount="infinite" style={{height:100,width:100}}  source={imageIconPack.applogo} /> */}
    </Box>
    </>
  );
};

export default SplashScreen;

