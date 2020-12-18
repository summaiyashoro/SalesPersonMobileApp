//custom navigation theme , override builtin navigation theme
import {DefaultTheme} from '@react-navigation/native';
import colors from '../config/colors';

export default{
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary:'#3C86FF',
        background:colors.white
    }
};