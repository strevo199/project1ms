/**
 * @MainLandingHeader Component
 *
 * The Header version One for Header component.
 */

import {Text} from '@shared/Typography';
import React from 'react';
import {Box} from '../layout/Box';
import {ImageIcon} from '@assets/icons/ImageIcon';
import SimpleInput from '../textInput/SimpleInput';
import {TouchableOpacity} from 'react-native';
import {RootState, useAppDispatch, useAppSelector} from '@shared/store';
import {toggleTheme} from '@shared/store/appFunction.slice';
import {palette} from '@shared/theme/palette';
import {NavReplace} from '@shared/navigation/AltNavigation';

const MainLandingHeader = ({hasBackBtn,title}) => {
  const {theme, referer} = useAppSelector(
    (state: RootState) => state.appsettings,
  );
  const dispatch = useAppDispatch();

  const handleAppTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box>
    <Box
      alignItems={'center'}
      flexDirection={'row'}
      justifyContent={'space-between'}>
      <TouchableOpacity
        disabled={!hasBackBtn}
        onPress={() => {
          console.log(referer);

          NavReplace(referer);
        }}
        style={{
          height: 25,
          width: 25,
          marginTop: -15,
          opacity: hasBackBtn ? 1 : 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {<ImageIcon color="primary700" size="sm" name="arrowLeft" />}
      </TouchableOpacity>

      <Box justifyContent={'center'} width={'52%'}>
        <SimpleInput
          inputBoxProps={{height: 42}}
          keyboardType="default"
          onChangeText={() => console.log('search')}
          label="Search feature"
        />
      </Box>
      <Box
        style={{marginTop: -15}}
        height={45}
        width={'33%'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Box
          flexDirection={'row'}
          gap={'md'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <TouchableOpacity
            style={{
              backgroundColor: palette.default300,
              elevation: 3,
              borderRadius: 15,
              padding: 8,
            }}
            onPress={handleAppTheme}>
            <ImageIcon
              name={theme !== 'light' ? 'moon_line' : 'brightness'}
              color="textColorInverted"
              size="sm"
            />
          </TouchableOpacity>
        </Box>
        <ImageIcon name="appicon" style={{borderRadius: 20}} size="md" />
        <Box backgroundColor={'default300'} elevation={3} borderRadius={'md'}>
          <ImageIcon name={'logout'} size="lg" />
        </Box>
      </Box>
      
    </Box>
      {title && <Box>
        <Text variant={"bold14"}>{title}</Text>
      </Box>}
    </Box>
  );
};

export default MainLandingHeader;
