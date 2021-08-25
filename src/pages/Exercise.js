import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity, TextInput} from 'react-native';

export const ExerciseTemplate = ({route}) => {
    return (
    <View style={{flex:1, justifyContent:"space-between", alignItems:"center"}}>
        <Text style={styles.mathDescription}>{route.params.exerciseDesc}</Text>
        <View style={{justifyContent:"space-between", alignItems:"center"}}>
        <Text style={styles.mathProblem}>{route.params.problem}</Text>
        <TextInput style={styles.inputField}/>
        </View>
        <TouchableOpacity style={styles.SubmitButton}>
            <Text>Submit</Text>
        </TouchableOpacity>
    </View>)

}

const styles = StyleSheet.create({
    mathDescription:{
        textAlign:"center",
        marginTop:76,
        fontSize:28
    },
    mathProblem:{
        fontSize:24,
        margin:12
    },
    inputField:{
        width: 319,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
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