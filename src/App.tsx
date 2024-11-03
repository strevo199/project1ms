import React from 'react';
import { Text } from './shared/Typography';
import { Box } from './shared/Layout/Box';
import { ThemeProvider } from '@shopify/restyle';
import theme from './shared/theme';




const App = () => {

  
  return (
    <ThemeProvider theme={theme.darkTheme}>
    <Box   flex={1} >
      <Text variant={'bold36'} color={'textColor'} >Solomon</Text>
    </Box>
    </ThemeProvider>
  );
};

export default App;
