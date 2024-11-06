/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */



/**
 * @HeaderOne Component
 *
 * The Header version One for Header component.
 */


import React from 'react'
import { TouchableOpacity } from 'react-native';

import { ImageIcon } from '@/src/assets/icons/ImageIcon';

import { NavReplace } from '../../navigations/rootNavigation/AltNavigation';
import { RootState, useAppSelector } from '../../store';
import { Box } from '../layout/Box';
import { MediumText } from '../Typography';


const HeaderOne : React.FC<HeaderInferface> = ({title,hasBackBtn,cancelpress}) => {
  const { referer } = useAppSelector((state: RootState) => state.app);

  return (
    <Box className=" mb-3 mt-4 flex-row items-center justify-between px-3 ">
              <TouchableOpacity
              disabled={hasBackBtn}
              onPress={() => {
                if (cancelpress) {
                  cancelpress()
                }else{

                  NavReplace(referer)
                }
              }}
                style={{
                  height: 28,
                  width: 28,
                  opacity: hasBackBtn  ? 1 : 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
               { <ImageIcon size="sm" name="arrowLeft" />}
              </TouchableOpacity>
              <Box>
                <MediumText >{title}</MediumText>
              </Box>
              <TouchableOpacity
              onPress={() => {
                if (cancelpress) {
                  cancelpress()

                }else{

                  NavReplace(referer)
                }
              }}
                style={{
                  height: 28,
                  width: 28,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <ImageIcon size="sm" name="cancel" />
              </TouchableOpacity>
            </Box>
  )
}

export default HeaderOne