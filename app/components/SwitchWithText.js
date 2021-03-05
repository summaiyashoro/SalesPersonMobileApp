import React,{useState} from 'react';
import { View } from "react-native";
import { Switch } from "react-native-switch";
import colors from '../config/colors';

function SwitchWithText({title, px,status}) {
    const [currentstatus, setStatus] = useState(true);
    const getStyle = () => {
      switch (status) {
          case 'active':
              return colors.lightGreen
              break;
          case 'inactive':
              return colors.danger
              break;
          case 'pray':
              return "#ff8c1a"
              break;
          case 'lunch':
              return "#cccc00"
              break;

          default:
              break;
      }
  }

  return (
    <View style={{flex:1, justifyContent:"center" , alignItems:'center'}}>
    <Switch
    value= {currentstatus}
    onValueChange={(val) => setStatus(!currentstatus)}
    activeText={title}
    inActiveText={title}
    circleSize={14}
    barHeight={18}
    circleBorderWidth={1}
    backgroundActive={getStyle()}
    backgroundInactive={colors.light}
    circleActiveColor={getStyle()}
    circleInActiveColor={colors.primary}
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" , borderColor:'white',}} 
    switchLeftPx={px} 
    switchRightPx={px} 
    switchWidthMultiplier={5.5} 
    switchBorderRadius={14} 
  />
  </View>
  );
}

export default SwitchWithText;



/**
 * import { Switch } from "react-native-switch";

const App = () => {
const [status, setStatus] = useState(true);

  return (
    <View style={{flex:1, justifyContent:"center" , alignItems:'center'}}>
    <Switch
    value= {status}
    onValueChange={(val) => setStatus(!status)}
    activeText={'Active'}
    inActiveText={'Active'}
    circleSize={26}
    barHeight={30}
    circleBorderWidth={1}
    backgroundActive={"green"}
    backgroundInactive={'gray'}
    circleActiveColor={'#30a566'}
    circleInActiveColor={'#000000'}
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" , borderColor:'white'}} 
    switchLeftPx={1.8} 
    switchRightPx={1.8} 
    switchWidthMultiplier={4} 
    switchBorderRadius={14} 
  />
  </View>
  );
};
 */