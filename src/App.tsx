import React, { useEffect } from 'react';
import { Text } from './shared/Typography';
import { Box } from './shared/components/Layout/Box';
import { ThemeProvider } from '@shopify/restyle';
import theme from './shared/theme';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './shared/navigation';



const Main = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <ThemeProvider theme={theme.lightTheme}>
      <Navigation/>
    </ThemeProvider>
  );
};



const App = () => {




  return (
    <Main />
  );
};

export default App;
