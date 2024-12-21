import { ImageBackground, StatusBar, Appearance } from 'react-native';
import React, {  FC } from 'react';
import { imageIconPack } from '@assets/icons/imageIconPack';
import { palette } from '@shared/theme/palette';
import LandingHeader from '../../headers/LandingHeader';
import MainLandingHeader from '@shared/components/headers/MainLandingHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../Box';
import { useAppSelector, RootState } from '@shared/store';
import HeaderOne from '@shared/components/headers/HeaderOne';

const MainLayout: FC<MainLayoutProp> = ({
  screenType,children,useheaderone,title,hasBackBtn,hasCancelBtn
}) => {
  const insets = useSafeAreaInsets();

  // Determine the app theme based on user preference or system setting
  const {theme } = useAppSelector(
    (state: RootState) => state.appsettings
  );


  return (
    <>
      <StatusBar  barStyle={theme ==="dark" ? 'light-content' :'dark-content'} translucent backgroundColor={palette.transparent} />
      <ImageBackground
        source={theme ==="dark" ? imageIconPack.darkbackground : imageIconPack.loginbackground}
        style={{flex:1,padding:16}}
       >
        <Box height={insets.top} />
        { screenType === 'landing' && <LandingHeader/>}
        { useheaderone && <HeaderOne hasBackBtn={hasBackBtn} hasCancelBtn={hasCancelBtn} title={title}/>}
        { screenType === 'main-landing' && <MainLandingHeader title={title} hasBackBtn ={hasBackBtn}/>}
        <Box flex={1}>
          {children}
        </Box>
        <Box height={insets.bottom} />
       </ImageBackground>
      </>
  );
};

export default MainLayout;
