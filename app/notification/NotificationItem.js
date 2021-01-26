import React from 'react';
import { View, StyleSheet, Image, Pressable} from 'react-native';

import colors from '../config/colors';
import AppText from "../components/AppText";
import defaultProfileUri from "../components/defaultProfile";

const NotificationItem = ({ title, subTitle, profileImage, timeofArrival, navigation }) => {

    return (
        <View style={styles.container} >
            <Image source={{ uri: profileImage ? profileImage : defaultProfileUri }} style={styles.image} />

            <View style={styles.content}>
                <Pressable onPress={() => navigation.navigate('NotificationsDetailsScreen',{title, subTitle, profileImage})}>
                    <View style={styles.header}>
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        <AppText style={styles.time} numberOfLines={1} >{timeofArrival} ago</AppText>
                    </View>
                    <AppText style={styles.subtitle} numberOfLines={3} >{subTitle}</AppText>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    content: {
        marginHorizontal: 10,
        flexShrink: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22,
        marginLeft: 2
    },
    subtitle: {
        color: colors.medium,
        paddingRight: 2,
        fontSize:14
    },
    title: {
        color:colors.dark,
        fontSize: 16,
        fontWeight: '700',
        flexShrink: 1,
        width: '100%',
        paddingRight: 2
    },
    time: {
        paddingRight: 1,
        fontSize: 10,
    },
})

export default NotificationItem;