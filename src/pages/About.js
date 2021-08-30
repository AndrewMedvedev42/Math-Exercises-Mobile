import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    useFonts,
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black
  } from '@expo-google-fonts/rubik';

import { StyleSheet, Text, View , Button, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
export const About = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
        Rubik_800ExtraBold,
        Rubik_900Black
      });

    return (
        <View style={{flex:1}}>
            <View>
            <TouchableOpacity style={styles.BackButton} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="chevron-back-outline" size={19.2} color="gray" />
            </TouchableOpacity>
            </View>
            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                    <View style={styles.Container}>
                        <View style={styles.InfoContainer}>
                            <Text style={styles.title}>About</Text>
                            <Text style={styles.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </View>
                        <View style={styles.InfoContainer}>
                            <Text style={styles.title}>Difficulties</Text>
                            <View>
                                <Text style={styles.subTitle}>Easy</Text>
                                <Text style={styles.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Easy</Text>
                                <Text style={styles.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Easy</Text>
                                <Text style={styles.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                        </View>
                        <View style={styles.InfoContainer}>
                            <Text style={styles.title}>How to fill answers</Text>
                            <Text style={styles.article}>1. Answers should not contain spaces (write correctly: -2);</Text>
                            <Text style={styles.article}>2. Ordinary fractions - through a slash (correct to write: 4/3);</Text>
                            <Text style={styles.article}>3. Decimal fractions - through a dot without spaces (write correctly: 4.7);</Text>
                        </View>
                        
                    </View>
                    </ScrollView>
                </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:36,
        fontFamily:"Rubik_800ExtraBold"
    },
    subTitle:{
        fontSize:24,
    },
    article:{
        fontSize:18,
    },
    Container:{
        justifyContent:"center",
        alignItems:"center",
    },
    InfoContainer:{
        width: 319,
        margin: 6,
        padding: 20,
        borderRadius:25,
        backgroundColor:"white",
    },
    BackButton:{
        width: 64,
        height: 64,
        marginTop:48,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderColor:"black",
        borderRadius:50,
        borderWidth: 3,
        elevation:5,
    }
})