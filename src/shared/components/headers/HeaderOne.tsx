/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */



/**
 * @HeaderOne Component
 *
 * The Header version One for Header component.
 */


import React from 'react';
import { TouchableOpacity } from 'react-native';


import { RootState, useAppSelector } from '../../store';
import { Box } from '../layout/Box';
import { NavReplace } from '@shared/navigation/AltNavigation';
import { Text } from '@shared/Typography';
import { ImageIcon } from '@assets/icons/ImageIcon';


const HeaderOne : React.FC<HeaderInferface> = ({title,hasBackBtn,cancelpress,hasCancelBtn}) => {
  const { referer } = useAppSelector((state: RootState) => state.appsettings);

  return (
    <Box flexDirection={'row'} alignItems={'center'} marginTop={'sm'} justifyContent={"space-between"} >
       <Box flex={1}>
              <TouchableOpacity
              disabled={!hasBackBtn}
              onPress={() => {
                console.log(referer);
                

                  NavReplace(referer);
              }}
                style={{
                  height: 28,
                  width: 28,
                  opacity: hasBackBtn  ? 1 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
               { <ImageIcon color='primary700' size="md" name="arrowLeft" />}
              </TouchableOpacity>

       </Box>
              <Box flex={1} alignItems={'center'}>
                <Text variant={'bold22'} >{title}</Text>
              </Box>
              <Box flex={1}>

              <TouchableOpacity
              onPress={() => {
                if (cancelpress) {
                  cancelpress();

                }else{

                  NavReplace(referer);
                }
              }}
              disabled={!hasCancelBtn}
                style={{
                  height: 28,
                  width: 28,
                  opacity: hasCancelBtn  ? 1 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageIcon size="sm" name="cancel" />
              </TouchableOpacity>
              </Box>
            </Box>
  );
};

export default HeaderOne;
