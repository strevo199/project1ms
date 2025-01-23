import {StatusBar} from 'react-native';
import React, {FC} from 'react';
import {palette} from '@shared/theme/palette';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box} from '../Box';
import {useAppSelector, RootState} from '@shared/store';
import MiniHeader from '@shared/components/headers/MiniHeader';

const MiniLayoutApp: FC<MiniLayoutAppProp> = ({children}) => {
  const insets = useSafeAreaInsets();

  // Determine the app theme based on user preference or system setting
  const {theme} = useAppSelector((state: RootState) => state.appsettings);

  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor={palette.transparent}
      />
      <Box flex={1} style={{marginTop:insets.top,marginBottom:insets.bottom}}>
        <MiniHeader/>
        <Box flex={1}>{children}</Box>
      </Box>
    </>
  );
};

export default MiniLayoutApp;
