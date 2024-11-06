/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */



/**
 * @LandingHeader Component
 *
 * The Header version One for Header component.
 */


import React from 'react'

import { Box } from '../layout/Box'
import { BoldText } from '../Typography'



const LandingHeader: React.FC<LandingHeaderInferface> = ({ title,headerRightComponent,headerLeftComponent }) => {

  return (
    <Box className=" mb-3 mt-4 flex-row items-center justify-between px-3 ">
      {headerLeftComponent}
      <Box>
        <BoldText className=' text-2xl font-semibold' >{title}</BoldText>
      </Box>
      {headerRightComponent}
    </Box>
  )
}

export default LandingHeader