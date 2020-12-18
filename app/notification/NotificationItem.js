import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Modal, Pressable,TouchableWithoutFeedback, SafeAreaView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import defaultProfile from "../components/defaultProfile";


const NotificationItem = ({ title, subTitle, profileImage, timeofArrival, navigation }) => {

    return (
        <View style={styles.container} >
            <Image source={{ uri: profileImage ? profileImage : defaultProfile.defaultProfileUri }} style={styles.image} />

            <View style={styles.content}>
                <Pressable onPress={() => navigation.navigate('NotificationsDetailsScreen',{title, subTitle, profileImage})}>
                    <View style={styles.header}>
                        <Text style={styles.title} numberOfLines={1} >{title}</Text>
                        <Text style={styles.time} numberOfLines={1} >{timeofArrival} ago</Text>
                    </View>
                    <Text style={styles.subtitle} numberOfLines={3} >{subTitle}</Text>
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
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
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