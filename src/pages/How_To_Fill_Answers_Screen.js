import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export const How_To_Fill_Answers_Screen = ({navigation}) => {

    return (
        <View style={{flex:1}}>
            <View>
            <TouchableOpacity style={styles.BackButton} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="chevron-back-outline" size={19.2} color="gray" />
            </TouchableOpacity>
            </View>
                    <View style={styles.Container}>
                        <View style={styles.InfoContainer}>
                            <Text style={styles.title}>How to fill answers</Text>
                            <Text style={styles.article}><Text style={styles.span}>1.</Text> Answers should not contain spaces (write correctly: -2);</Text>
                            <Text style={styles.article}><Text style={styles.span}>2.</Text> Ordinary fractions - through a slash (correct to write: 4/3);</Text>
                            <Text style={styles.article}><Text style={styles.span}>3.</Text> Decimal fractions - through a dot without spaces (write correctly: 4.7);</Text>
                        </View>
                        
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:36,
        fontWeight:"bold"
    },
    span:{
        fontSize:20,
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:24,
    },
    article:{
        margin: 4,
        fontSize:18,
    },
    Container:{
        justifyContent:"center",
        alignItems:"center",
    },
    InfoContainer:{
        width: 350,
        padding: 20,
    },
    BackButton:{
        width: 64,
        height: 64,
        marginTop:48,
        marginLeft:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:50,
        elevation:5
    }
})