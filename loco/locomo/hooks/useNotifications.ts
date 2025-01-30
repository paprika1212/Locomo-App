import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from '../services/NotificationsService';

const useNotifications = () => {
  useEffect(() => {
    const setupNotifications = async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        await firestore()
          .collection('users')
          .doc(user.uid)
          .update({ notificationToken: token });
      }
    };
    setupNotifications();
  }, []);
};