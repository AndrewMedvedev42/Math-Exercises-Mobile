import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';

export const ExerciseTemplate = ({route}) => {
    return (
    <View>
        <Text style={{fontSize:28}}>{route.params.exerciseDesc}</Text>
        <Text style={{fontSize:32}}>{route.params.problem}</Text>
    </View>)

}