import React from 'react';
import {Box} from '@shared/components/layout/Box';
import MiniLayoutApp from '@shared/components/layout/main/MiniLayoutApp';
import {Text} from '@shared/Typography';

const EventsLanding = () => {
  return (
    <MiniLayoutApp hasBackBtn>
      <Box>
        <Text>CalendardApp</Text>
      </Box>
    </MiniLayoutApp>

  );
};

export default EventsLanding;
