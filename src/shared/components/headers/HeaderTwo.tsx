
/**
 * @HeaderTwo Component
 *
 * The Header version One for Header component.
 */


import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ImageIcon } from '@/src/assets/icons/ImageIcon'
import { RootState, useAppSelector } from '@core/store'

import { NavReplace } from '../../navigations/rootNavigation/AltNavigation'
import { Box } from '../layout/Box'
import { MediumText } from '../Typography'

const HeaderTwo : React.FC<HeaderInferface> = ({title,hasBackBtn,cancelpress}) => {
  const { referer } = useAppSelector((state: RootState) => state.app);

  return (
    <Box className=" mb-3 mt-4 flex-row items-center justify-between px-3 ">
              <TouchableOpacity
              disabled={!hasBackBtn}
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

                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <MediumText className=' text-primary-600'>Cancel</MediumText>
              </TouchableOpacity>
            </Box>
  )
}

export default HeaderTwo