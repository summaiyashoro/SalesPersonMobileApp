import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

import defaultProfileUri from "../components/defaultProfile";
import AppText from "../components/AppText";
import colors from '../config/colors';

function NotificationsDetailsScreen({ route }) {
    const param = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: param.profileImage ? param.profileImage : defaultProfileUri }} style={styles.image} />

                <View style={styles.container}>
                    <AppText style={styles.title}>{param.title}</AppText>
                    <AppText style={styles.subtitle}>{param.subTitle}</AppText>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 9
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    title: {
        fontSize: 30,
        color: colors.dark,
        textAlign: 'center',
        fontWeight:'700'
    },
    subtitle: {
        fontSize: 16,
        color: colors.dark,
        textAlign: 'center'
    }
})

export default NotificationsDetailsScreen;   