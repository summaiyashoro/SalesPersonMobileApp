import React from 'react';
import { View ,StyleSheet} from 'react-native';

import colors from '../config/colors';

const Separator = ({...otherProps}) =>(
<View style={styles.container} {...otherProps}/>
)


const styles = StyleSheet.create({
    container:{
    backgroundColor:colors.light,
    backgroundColor:"#d9d9d9",
    width:'100%',
    height:0.5,
    marginVertical:6,
    alignSelf:'center'
    }
})

export default Separator;