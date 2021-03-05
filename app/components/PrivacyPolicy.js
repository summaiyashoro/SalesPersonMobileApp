import React from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";

function PrivacyPolicy(props) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.heading}>Privacy Policy</Text>
                <Text style={styles.text}>1.1 Access to the Mobile Applicaon and use of the Services oﬀered on the Mobile Applicaon by MTS is subject to this Privacy Policy. By accessing the Mobile Applicaon and by connuing to use the Services oﬀered, you are deemed to have accepted this Privacy Policy, and in parcular, you are deemed to have consented to our use and disclosure of your personal informaon in the manner prescribed in this Privacy Policy and for the purposes set out in Clauses 3.7 and/or 4.1. We reserve the right to amend this Privacy Policy from me to me. If you disagree with any part of this Privacy Policy, you must immediately disconnue your access to the Mobile Applicaon and your use of the Services. </Text>
                <Text style={styles.text}>
                    1.2 As part of the normal operaon of our Services, we collect, use and, in some cases, disclose informaon about you to third pares. Accordingly, we have developed this Privacy Policy in order for you to understand how we collect, use, communicate and disclose and make use of your personal informaon when you use the Services on the Mobile Applicaon:- 
                    (a) Before or at the me of collecng personal informaon, we will idenfy the purposes for which informaon is being collected. 
                    (b) We will collect and use of personal informaon solely with the objecve of fulﬁlling those purposes speciﬁed by us and for other compable purposes, unless we obtain the consent of the individual concerned or as required by law. 
                    (c) We will only retain personal informaon as long as necessary for the fulﬁllment of those purposes. 
                    (d) We will collect personal informaon by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned. 
                    (e) Personal informaon should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. 
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
    heading:{
        fontWeight:'bold',
        fontSize:16
    },
    text:{
        fontSize:14,
        lineHeight:25,
        marginVertical:5
    }
})

export default PrivacyPolicy;