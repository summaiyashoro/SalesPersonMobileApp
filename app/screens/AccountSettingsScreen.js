import React from 'react';

import Screen from './Screen';
import AccountSettings from '../accountsettings/AccountSettings';

function AccountSettingsScreen({navigation}) {
    return (
       <Screen>
           <AccountSettings navigation={navigation} />
       </Screen>
    );
}

export default AccountSettingsScreen;