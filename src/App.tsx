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
import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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


 const  requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }


  useEffect(() => {
    requestNotificationPermission();
  }, [])
  




  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.lightTheme : theme.darkTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

const App = () => {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    if (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  };
  
  useEffect(() => {
    requestUserPermission();
  }, []);
  // Get FCM Token
const getFcmToken = async () => {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
};

// Listen for Messages
const onMessageListener = () =>
  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

// Initialize
useEffect(() => {
  requestUserPermission();
  getFcmToken();
  onMessageListener();
}, []);

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: 'default-channel-id', // (required)
    channelName: 'Default Channel', // (required)
  },
  created => console.log(`createChannel returned '${created}'`),
);
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
