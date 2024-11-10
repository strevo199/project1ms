/**
 * @MainLandingHeader Component
 *
 * The Header version One for Header component.
 */


import { Text } from '@shared/Typography';
import React from 'react';
import { Box } from '../layout/Box';
import { ImageIcon } from '@assets/icons/ImageIcon';
import SimpleInput from '../textInput/SimpleInput';



const MainLandingHeader = () => {

  return (
    <Box  alignItems={'center'} flexDirection={'row'} justifyContent={'space-between'} paddingRight={'md'}>
      <Box borderLeftWidth={0} borderTopRightRadius={'lg'} alignItems={'center'} borderColor={'primaryColor'} borderWidth={1} padding={'sm'} borderBottomEndRadius={'lg'} >
        <Text variant={'bold16'} color={'primaryColor'}>Log Out</Text>
      </Box>
        <Box flex={0.7} style={{marginBottom:-10}} >
        <SimpleInput  keyboardType="default"  onChangeText={()=>console.log('search')}  label="Search feature"/>
        </Box>
      <Box flexDirection={'row'} gap={'md'}  justifyContent={'space-between'} alignItems={'center'} >
        <ImageIcon name="moon_line"  size="md" />
        <ImageIcon name="appicon" style={{borderRadius:20}} size="lg" />
      </Box>
    </Box>
  );
};

export default MainLandingHeader;
