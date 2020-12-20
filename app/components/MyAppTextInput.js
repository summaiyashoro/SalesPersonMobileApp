
import React, { useRef, useState, useEffect } from 'react';
import { 
    View, 
    StyleSheet, 
    Animated, 
    TouchableOpacity 
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import InputField from './InputField';

const MyAppTextInput = ({ iconLeft, iconRight, onPress, placeholder, value, leftPlaceholderPadding,...otherProps }) => {
    const [isFocus, setFocus] = useState(false);
    const translate = useRef(new Animated.Value(value === '' ? 0 : 1)).current;

    const translateIntoY = translate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -30]
    })

    useEffect(() => {
        Animated.timing(translate, {
            toValue: (isFocus || value !== '') ? 1 : 0,
            duration: 100,
            useNativeDriver: true
        }).start();
    }, [isFocus])


    return (
        <View style={[styles.container, { borderColor: isFocus|| value !== '' ? '#66c2ff' : '#e6f0ff' }]}>
            {iconLeft && <Icon
                name={iconLeft}
                size={18}
                color={colors.secondary}
                style={{ marginLeft: 10 }}
            />}

            <Animated.Text style={{
                color: (isFocus || value !== '') ? colors.secondary : colors.medium,
                backgroundColor: colors.white,
                transform: [{ translateY: translateIntoY }],
                fontSize: isFocus || value !== '' ? 14 : 16,
                paddingHorizontal: 4,
                position: 'absolute',
                left:leftPlaceholderPadding,
            }}
            > {placeholder}
            </Animated.Text>

            <InputField
                onFocus={() => setFocus(true)}
                onEndEditing={()=> setFocus(false)}
                // onBlur={() => setFocus(false)}
                {...otherProps}
            />

            <TouchableOpacity onPress={onPress}>
                {iconRight &&
                    <MaterialCommunityIcons
                        name={iconRight}
                        size={20}
                        color={colors.medium}
                        style={{ marginRight: 10 }}
                    />
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderColor: colors.light,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        width: '100%',
        padding: 2,
        marginVertical:10,
        alignItems: 'center',
    },
})

export default MyAppTextInput;