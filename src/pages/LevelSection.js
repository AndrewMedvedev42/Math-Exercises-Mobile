import React from 'react';
import {Data} from "../Data/Data"
import { Ionicons } from '@expo/vector-icons'
import {BoxShadow} from 'react-native-shadow'

import { StyleSheet, Text, View , Button, TouchableOpacity, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const LevelSection = ({route,navigation}) => {

    return(<View style={{flex:1}}>
        <View>
                <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={20} color="#404040" />
                </TouchableOpacity>
                <Pressable>
                    <Text style={styles.levelSectionTitle}>{`${route.params.level.charAt(0).toUpperCase() + route.params.level.slice(1)} section`}</Text>
                </Pressable>
            <View style={styles.levelListContainer}>
                {Data.map((item)=>{
                const {id, sortKey, index, problemDescription, mathProblem} = item
                if (sortKey === route.params.level) {
                    return (
                        <TouchableOpacity key={id} style={styles.levelSlot} onPress={() => navigation.navigate('Exercise',{item})}>
                                    <Text style={styles.levelNumber}>{index}</Text>
                        </TouchableOpacity>
                    )
                }
            })}
            </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    levelSectionTitle:{
        margin: 24,
        textAlign:"center",
        fontSize:36,
        fontWeight:"bold"
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
    },
    levelNumber:{
        color: "#404040",
        fontSize:24,
        fontWeight:"bold"
    },
    levelListContainer:{
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    levelSlot:{
        margin:4,
        width: 100,
        height: 100,
        borderRadius:25,
        // borderColor:"#ffcc99",
        // borderWidth: 5,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"black",
        elevation:5

    }
})