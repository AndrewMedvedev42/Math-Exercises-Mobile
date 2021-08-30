import React from "react";
import { useState } from 'react';
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
import { StyleSheet, Text, View , Button, TouchableOpacity, TextInput} from 'react-native';

export const ExerciseTemplate = ({route, navigation}) => {

    let [fontsLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
        Rubik_800ExtraBold,
        Rubik_900Black
      });

    const {problemDescription, mathProblem, trueAnswer} = route.params.item

    const [typedInput, setTypedInput] = useState(null)
    const [backButtonActivity, setbackButtonActivity] = useState(false)
    const [exerciseCompleteStatus, setExerciseCompleteStatus] = useState(false)

    const checkAnswer = ()=>{
        if (typedInput == trueAnswer) {
            console.log(true);
            setbackButtonActivity(true)
            setExerciseCompleteStatus(true)
        } else {
            console.log(false);
        }
    }

    return (
    <View style={{flex:1,justifyContent:"space-between", alignItems:"center"}}>
        <View style={{marginTop:76,justifyContent:"space-between", alignItems:"center"}}>
        {exerciseCompleteStatus && (
                <Text>Congratulations, you answered correctly!</Text>
            )}
            
            <Text style={styles.mathDescription}>{problemDescription}</Text>
            <Text style={styles.mathProblem}>{mathProblem}</Text>
                <TextInput editable={!exerciseCompleteStatus} style={styles.inputField} onChangeText={(text)=>{setTypedInput(text)}}/>
        </View>
        <View>
            {!backButtonActivity && (
                <TouchableOpacity style={styles.SubmitButton} onPress={()=>{checkAnswer()}}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            )}

            {backButtonActivity && (
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
            )}
        </View>
    </View>)

}

const styles = StyleSheet.create({
    mathDescription:{
        textAlign:"center",
        fontSize:28,
        fontFamily:"Rubik_800ExtraBold"
    },
    mathProblem:{
        fontSize:24,
        margin:12
    },
    inputField:{
        width: 319,
        height: 40, 
        paddingHorizontal:20,
        borderColor: 'gray', 
        borderWidth: 1 
    },
    goBackButton:{
        width: 319,
        padding: 20,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightgreen",
        borderRadius:50,
    },
    SubmitButton:{
        width: 319,
        padding: 20,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#c09",
        borderRadius:50,
    }
})