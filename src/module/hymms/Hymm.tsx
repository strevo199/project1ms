import React, {useEffect, useLayoutEffect} from 'react';
import {RootNavigationProps} from '@shared/navigation/types';
import MainLayout from '@shared/components/layout/main/MainLayout';
import {setReferer} from '@shared/store/appFunction.slice';
import {RootState, useAppDispatch, useAppSelector} from '@shared/store';
import {FlatList, StyleSheet} from 'react-native';
import {Box} from '@shared/components/layout/Box';
import {Text} from '@shared/Typography';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {seCurrentHymm} from '@shared/store/slice/hymms.slice';

const Hymm: React.FC<RootNavigationProps<'Hymm'>> = ({navigation}) => {
  const {currentHymm, hymmList, lastHymmIndex, firstHymmIndex} = useAppSelector(
    (state: RootState) => state.hymms,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setReferer({
        screen: 'HymmsList',
        stack: '',
      }),
    );
  }, [dispatch]);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(50); // Start below the visible area
  const opacity = useSharedValue(0); // Start invisible
  useLayoutEffect(() => {
    translateY.value = withSpring(0); // Slide to original position
    opacity.value = withSpring(1); // Fade in
  }, [translateY, opacity]);
  const handleSwipeLeft = () => {
    console.log('Swiped Left');
    const indexOfCurentHymm = hymmList.findIndex(
      obj => obj.title === currentHymm.title,
    );
    if (firstHymmIndex === indexOfCurentHymm) {
      const nextHymm = hymmList[lastHymmIndex];
      dispatch(seCurrentHymm(nextHymm));
      return;
    }
    const nextHymm = hymmList[indexOfCurentHymm - 1];
    dispatch(seCurrentHymm(nextHymm));
  };

  const handleSwipeRight = () => {
    const indexOfCurentHymm = hymmList.findIndex(
      obj => obj.title === currentHymm.title,
    );
    if (lastHymmIndex === indexOfCurentHymm) {
      const nextHymm = hymmList[firstHymmIndex];
      dispatch(seCurrentHymm(nextHymm));
      return;
    }
    const nextHymm = hymmList[indexOfCurentHymm + 1];
    dispatch(seCurrentHymm(nextHymm));
  };

  // Swipe gestures
  const swipeLeft = Gesture.Fling()
    .direction(1) // 1 corresponds to LEFT
    .onEnd(() => runOnJS(handleSwipeLeft)());

  const swipeRight = Gesture.Fling()
    .direction(2) // 2 corresponds to RIGHT
    .onEnd(() => runOnJS(handleSwipeRight)());

  const combinedGesture = Gesture.Race(swipeLeft, swipeRight);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value)}],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const renderVerses = ({ item, index }: { item: any; index: number }) => {


  

  
    return (
      <Animated.View style={[animatedStyle2]}>
        <Box marginTop={'md'}>
          <Box flexDirection={'row'}>
            <Box flex={0.1}>
              <Text variant={'bold14'}>{item.label}.</Text>
            </Box>
            <Box flex={0.9}>
              <Text variant={'medium16'} letterSpacing={0.6}>
                {item.value}
              </Text>
              <Text variant={'bold16'}>Chorus:-</Text>
            </Box>
          </Box>
        </Box>
      </Animated.View>
    );
  };
  
  const renderHeader = () => (
    <Box rowGap={'sm'}>
      <Box>
        <Text textAlign={'center'} variant={'bold16'}>
          {currentHymm.content}
        </Text>
      </Box>
      <Box flexDirection={'row'}>
        <Box flex={1}>
          <Text
            textAlign={'center'}
            textTransform={'capitalize'}
            variant={'medium16'}>
            {currentHymm.title}
          </Text>
        </Box>
        <Box>
          <Box borderRadius={'sm'}>
            <Text variant={'bold16'}>{currentHymm.hymmnum}</Text>
          </Box>
        </Box>
      </Box>
      {currentHymm.chorus && (
        <Box flexDirection={'row'}>
          <Box flex={0.2}>
            <Text variant={'medium16'}>Chorus:-</Text>
          </Box>
          <Box flex={0.8}>
            <Text variant={'medium14'} letterSpacing={0.6}>
              {currentHymm.chorus}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );

  return (
    <MainLayout screenType="main-landing" hasBackBtn>
      <GestureDetector gesture={combinedGesture}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <FlatList
            ListHeaderComponent={renderHeader}
            showsVerticalScrollIndicator={false}
            renderItem={renderVerses}
            data={currentHymm.verses}
          />
        </Animated.View>
      </GestureDetector>
    </MainLayout>
  );
};

export default Hymm;

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
