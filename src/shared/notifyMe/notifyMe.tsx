import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import { storage } from '@shared/store/persisted/encryptedStorage';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

export const requestUserPermission = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log("Authorization status:", authStatus);
    }
  } catch {
    // console.log("Error:", error);
  }
};

export const getFCMToken = async () => {
  let fcmToken = storage.getString('fcmToken');
  // console.log(fcmToken, "old Token");
  if (!fcmToken) {
    try {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // console.log("newToken", fcmToken);
        storage.set('fcmToken', fcmToken);
      }
    } catch {
      // console.log(error, "error in fcmToken");
    }
  }
};

export const NotificationListener = () => {
  messaging().onNotificationOpenedApp(async remoteMessage => {
    // console.log("A new FCM message arrived!", remoteMessage.notification);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        // console.log(
        //   "Notification caused the app to open from a quit state",
        //   remoteMessage.notification,
        // );
      }
    });

  messaging().onMessage(async remoteMessage => {
    // console.log(
    //   "Notification received while the app is in the foreground",
    //   remoteMessage.notification,
    // );
  });

  if (Platform.OS === 'android') {
    // PushNotification.createChannel(
    //   {
    //     channelId: "1",
    //     channelName: "name",
    //   },
    //   created => console.log(`createChannel returned '${created}'`),
    // );

    PushNotification.localNotification({
      title: 'NEW Message - ANDROID',
      message: 'Message',
      channelId: '1',
    });
  } else if (Platform.OS === 'ios') {
    PushNotification.localNotification({
      title: 'NEW Message - IOS',
      message: 'Message',
      channelId: '1',
    });
    PushNotificationIOS.addNotificationRequest({
      id: '1',
      title: 'NEW Message - IOS',
      body: 'Message',
    });
  }
  getFCMToken();
};
