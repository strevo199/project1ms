/**
 * @LandingHeader Component
 *
 * The Header version One for Header component.
 */


import { Text } from '@shared/Typography';
import React from 'react';
import { Box } from '../layout/Box';



const LandingHeader: React.FC<LandingHeaderInferface> = ({ title,headerRightComponent,headerLeftComponent }) => {

  return (
    <Box>
      {headerLeftComponent}
      <Box>
        <Text >{title}</Text>
      </Box>
      {headerRightComponent}
    </Box>
  );
};

export default LandingHeader;
