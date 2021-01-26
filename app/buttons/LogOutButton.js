import React from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import AppText from "../components/AppText";

function LogOutButton({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon
                    name="log-out-outline"
                    color={colors.orangeColor}
                    size={20}
                    style={{ transform: [{ rotateY: '180deg' }] }}
                />
                <AppText style={styles.text}>{title}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.orangeColor,
        fontWeight: 'bold',
        paddingLeft: 5
    }
})

export default LogOutButton;