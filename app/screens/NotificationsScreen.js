import React, { useState } from 'react';


import Screen from './Screen';
import Notifications from '../notification/Notifications';

function NotificationsScreen({navigation}) {
   return (
      <Screen marginHorizontal={10}>
            <Notifications navigation={navigation} />
      </Screen>
   );
}

export default NotificationsScreen;