import {storage} from '@shared/store/persisted/encryptedStorage';
import {AESDecrypt, AESEncrypt} from './encryption';

export const getPushNotificationStatus = () =>
  AESDecrypt(storage.getString('pushnotificationstatus'))
    .pushNotificationStatus || 'A';

export const getHasEnabledPushNotification = () =>
  AESDecrypt(storage.getString('hasenabledpushnotification'))
    .hasEnabledPushNotification || false;

export const setPushNotificationStatus = (status: 'A' | 'I') => {
  storage.set(
    'pushnotificationstatus',
    AESEncrypt({pushNotificationStatus: status}),
  );
};

export const setHasEnabledPushNotification = (enabled: boolean) => {
  storage.set(
    'hasenabledpushnotification',
    AESEncrypt({hasEnabledPushNotification: enabled}),
  );
};

export const getFirebaseMessagingToken = () =>
  AESDecrypt(storage.getString('fcmtoken')).fcmToken || '';

export const setFirebaseMessagingToken = (token: string) => {
  storage.set('fcmtoken', AESEncrypt({fcmToken: token}));
};
