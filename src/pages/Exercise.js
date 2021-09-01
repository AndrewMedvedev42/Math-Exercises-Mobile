import React from "react";
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import MathJax from 'react-native-mathjax-local';
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
    const [incorrectAnswerAlert, setIncorrectAnswerAlert] = useState("")
    const [exerciseCompleteStatus, setExerciseCompleteStatus] = useState(false)

    const checkAnswer = ()=>{
        if (typedInput == trueAnswer) {
            console.log(true);
            setbackButtonActivity(true)
            setExerciseCompleteStatus(true)
            setIncorrectAnswerAlert("Correct!")
        } else {
            console.log(false);
            setIncorrectAnswerAlert("Incorrect!")
        }
    }

    return (
    <View style={{backgroundColor:"white",flex:1}}>
        <TouchableOpacity style={styles.topBackButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={19.2} color="white" />
        </TouchableOpacity>

        <View style={{flex:1,justifyContent:"space-between", alignItems:"center", }}>
        <View style={{}}>
            <Text style={styles.mathDescription}>{problemDescription}</Text>
            <Text style={styles.mathProblem}>{mathProblem}</Text>
                <TextInput editable={!exerciseCompleteStatus} style={styles.inputField} onChangeText={(text)=>{setTypedInput(text)}}/>
        </View>   
                <View>
                    <Text style={exerciseCompleteStatus ? (
                        styles.answerIsCorrectMessage):
                            styles.answerIsIncorrectMessage}>{incorrectAnswerAlert}</Text>
                    {!backButtonActivity && (
                        <TouchableOpacity style={styles.SubmitButton} onPress={()=>{checkAnswer()}}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    )}
                    {backButtonActivity && (
                        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.goBackButtonText}>Go Back</Text>
                        </TouchableOpacity>
                    )}
                </View>    
        </View>
    </View>)

}

const styles = StyleSheet.create({
    answerIsCorrectMessage:{
        marginBottom:12,
        color: "lightgreen",
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold"
    },
    answerIsIncorrectMessage:{
        marginBottom:12,
        color: "red",
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold"
    },
    topBackButton:{
        width: 64,
        height: 64,
        marginTop:48,
        marginLeft:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ff8000",
        borderRadius:50,
    },
    mathDescription:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold"
    },
    mathProblem:{
        textAlign:"center",
        fontSize:24,
        margin:12
    },
    inputField:{
        width: 319,
        height: 50, 
        paddingHorizontal:20,
        borderColor: 'gray', 
        borderRadius:15,
        borderWidth: 1 
    },
    goBackButton:{
        width: 319,
        padding: 20,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ff8000",
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
    },
    submitButtonText:{
        color: "white",
        fontSize:24,
        fontWeight:"bold"
    },
    goBackButtonText:{
        color: "white",
        fontSize:24,
        fontWeight:"bold"
        
    }
})