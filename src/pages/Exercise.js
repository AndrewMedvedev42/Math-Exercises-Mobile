import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity, TextInput} from 'react-native';

export const ExerciseTemplate = ({route}) => {
    return (
    <View>
        <Text style={{fontSize:28}}>{route.params.exerciseDesc}</Text>
        <View>
        <Text style={{fontSize:32}}>{route.params.problem}</Text>
            <TextInput
                style={styles.inputField}/>
        </View>
        <TouchableOpacity style={styles.SubmitButton}>
            <Text>Submit</Text>
        </TouchableOpacity>
    </View>)

}

const styles = StyleSheet.create({
    inputField:{
        width: 319,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
    },
    SubmitButton:{
        width: 319,
        padding: 20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderColor:"black",
        borderRadius:50,
        borderWidth: 3,
        elevation:5,
    }
})