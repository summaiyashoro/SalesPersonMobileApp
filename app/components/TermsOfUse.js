import React from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";

function TermsOfUse(props) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.heading}>1. TERMS OF USE</Text>
                <Text style={styles.text}>
                    By downloading, browsing, accessing or using this doredo (“Mobile Applicaon”), you agree to be bound by these Terms and Condions of Use. We reserve the right to amend these terms and condions at  any me. If you disagree with any of these Terms and Condions of Use, you must immediately disconnue your access to the Mobile Applicaon and your use of the services oﬀered on the Mobile  Applicaon.
                </Text>

                <Text style={styles.heading}>2. DEFINITIONS</Text>
                <Text style={styles.text}>
                    In these Terms and Condions of Use, the following capitalized terms shall have the following meanings, except where the context otherwise requires: "Account" means an account created by a User on the Mobile Applicaon as part of Registraon. "Business" refers to any enty whose products or Samples can be purchased and/or redeemed (as the case may be) via the Mobile Applicaon. "Privacy Policy" means the privacy policy set out in Clause 14 of these Terms and Condions of Use. "doredo points" means to redeem a Business’s products or Samples on these Terms and Condions of Use and "Redempon" means the act of redeeming such products or Samples. "Register" means to create an Account on the Mobile Applicaon and "Registraon" means the act of creang such an Account. "Samples" means samples of Merchant’s products and/or Business’s services, including without limitaon, any vouchers for the redempon of such services, and "Sample" means any one of them. "Services" means all the services provided by MTS Limited via the Mobile Applicaon to Users, and "Service" means any one of them
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     marginTop:10,
     marginBottom:20,
     marginHorizontal:10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:3
    },
    text: {
        fontSize: 14,
        lineHeight: 25,
        marginBottom:20,
    }
})

export default TermsOfUse;