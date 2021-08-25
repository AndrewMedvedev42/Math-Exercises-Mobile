import React from 'react';
import {Data} from "../Data/Data"
import { StyleSheet, Text, View , Button, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export const ExerciseSection = ({route,navigation}) => {

    return(<View style={{flex:1}}>
        <View style={styles.levelListContainer}>
        <SafeAreaView style={{flex:1}}>
                <ScrollView>
            {Data.map((item)=>{
            const {id, sortKey, index, problemDescription, mathProblem, listOfAnswers} = item
            if (sortKey === route.params.level) {
                return (
                    <View style={styles.levelSlot}>
                        <Text>{problemDescription}</Text>
                        <Text>{mathProblem}</Text>
                        <View style={styles.AnswerChoiseContainer}>
                            {listOfAnswers && (listOfAnswers.map((item)=>{
                                return(
                                    <TouchableOpacity style={styles.AnswerChoise}>
                                        <Text>{item.choise}</Text>
                                    </TouchableOpacity>
                                )
                            }))}
                        </View>
                    </View>
                )
            }
        })}
                </ScrollView>
            </SafeAreaView>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    AnswerChoise:{
        width: 160,
        height: 120,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:5,
        borderColor:"gray",
        
    },
    AnswerChoiseContainer:{
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:'wrap',
    },
    levelListContainer:{
        marginTop:32,
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    levelSlot:{
        margin:4,
        width: 370,
        height: 319,
        borderColor:"black",
        borderRadius:25,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        elevation:5,
    }
})