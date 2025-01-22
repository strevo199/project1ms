import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, ImageBackground, StatusBar } from 'react-native';
import { palette } from '@shared/theme/palette';
import { Box } from './Box';
import PrimaryButton from '../button/PrimaryButton';
import { imageIconPack } from '@assets/icons/imageIconPack';
import { Dimensions } from 'react-native';
import LoginComponent from '@module/authenication/LoginComponent';
import { RootNavigationProps } from '@shared/navigation/types';
import MainLayout from './main/MainLayout';
import { setUserMode } from '@shared/store/appFunction.slice';
import { useAppDispatch } from '@shared/store';
import SrfValue from '@shared/utilities/functions/SrfValue';

const LandingScreen: FC<RootNavigationProps<'LandingScreen'>> = ({ navigation,route }) => {
  const [translateY] = useState(new Animated.Value(0));
  const [translateX] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(1));
const dispatch = useAppDispatch();
  const [mode, setMode] = useState<'landing' | 'login' | 'register'>('');
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    // Start the animation when the component mounts
    startAnimation();
  }, []);

  console.log('--------------',route);
  

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.7,
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
        toValue: -height * 0.52,
        duration: 1200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(translateX, {
        toValue: width * 0.41,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start(() => {
      setMode('login');
    });
  };

  const resetanimationToLogin = () => {
    translateY.setValue(-height * 0.05);
    translateX.setValue(0);
    scale.setValue(1.7);
    setMode('landing');
  };

  const animateStyle1 = {
    transform: [{ scale }, { translateX }, { translateY }],
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={palette.transparent} />
      <MainLayout >
       {mode !== 'login' && <Animated.Image
          source={imageIconPack.appicon}
          style={{
            height: SrfValue(35),
            alignSelf: 'center',
            top: '55%',
            position: 'absolute',
            width: SrfValue(35),
            borderRadius: SrfValue(50),
            ...animateStyle1,
          }}
        />}
        <Box flex={1} justifyContent={'flex-end'}>
          {mode === 'landing' && (
            <Box marginBottom={'lg'} rowGap={'xs'} >
              <PrimaryButton onPress={animationToLogin} title="Log in" />
              <PrimaryButton
                onPress={() => navigation.navigate('ProductLanding')}
                btnTitleProps={{ color: 'textColorInverted' }}
                title="Register"
                btnBoxProps={{
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: 'textColorInverted',
                }}
              />
              <PrimaryButton
                 onPress={() => {
                  dispatch(setUserMode('free'));
                  navigation.navigate('ProductLanding');
                }}
                btnTitleProps={{ color: 'textColorInverted' }}
                title="Skip and continue as a guest"
                btnBoxProps={{ backgroundColor: 'transparent' }}
              />
            </Box>
          )}
          {mode === 'login' && <LoginComponent backaction={resetanimationToLogin} />}
          {mode === 'register' && <LoginComponent />}
        </Box>
      </MainLayout>
    </>
  );
};

export default LandingScreen;
