import { View, Text, ImageBackground, StatusBar } from 'react-native';
import React, { FC } from 'react';
import { imageIconPack } from '@assets/icons/imageIconPack';
import { palette } from '@shared/theme/palette';
import LandingHeader from '../../headers/LandingHeader';
import MainLandingHeader from '@shared/components/headers/MainLandingHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../Box';

const MainLayout: FC<MainLayoutProp> = ({
  screenType,
}) => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  



  return (
    <>
      <StatusBar  barStyle={'dark-content'} translucent backgroundColor={palette.transparent} />
      <ImageBackground
        source={imageIconPack.loginbackground}
        style={{flex:1}}
       >
        <Box height={insets.top} />
        { screenType ==="landing" && <LandingHeader/>}
        { screenType ==="main-landing" && <MainLandingHeader/>}
        <Box height={insets.bottom} />
       </ImageBackground>
      </>
  );
};

export default MainLayout;
