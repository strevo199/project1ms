import React, { useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from './shared/theme';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './shared/navigation';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { Provider } from 'react-redux';
import { RootState, store, useAppDispatch, useAppSelector } from '@shared/store';
import { Appearance } from 'react-native';
import { systemtoggleTheme } from '@shared/store/appFunction.slice';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getFcmToken, registerListenerWithFCM } from '@shared/notifyMe/PushNotifications';

const Main = () => {
  const { theme: currentTheme } = useAppSelector(
    (state: RootState) => state.appsettings
  );

  // Get the system color scheme
  const colorScheme = Appearance.getColorScheme();
  const dispatch = useAppDispatch();

  // Determine the app theme based on user preference or system setting

  useEffect(() => {
    SplashScreen.hide();
    if (colorScheme !== currentTheme) {
      dispatch(systemtoggleTheme(colorScheme));
    }
  }, []);






  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.lightTheme : theme.darkTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

const App = () => {
  useEffect(() => {
    getFcmToken();
  }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();
    return unsubscribe;
  }, []);



  return (
    <GestureHandlerRootView>
      <ErrorBoundary>
        <Provider store={store}>
          <Main />
        </Provider>
      </ErrorBoundary>

    </GestureHandlerRootView>
  );
};

export default App;
