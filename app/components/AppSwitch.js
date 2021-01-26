import React, { useState } from 'react';
import { Switch } from 'react-native';

import colors from '../config/colors';

const AppSwitch = (props) =>{
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);


   return (
      <Switch
         thumbColor={isEnabled ? colors.white : colors.white}
         trackColor={{ false: colors.light, true: colors.secondary }}
         ios_backgroundColor="#3e3e3e"
         onValueChange={toggleSwitch}
         value={isEnabled}
      />
   );
}



export default AppSwitch;