import React from 'react';
import {Data} from "../Data/Data"
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

import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';

export const LevelSection = ({route,navigation}) => {

    let [fontsLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
        Rubik_800ExtraBold,
        Rubik_900Black
      });

    return(<View style={{flex:1}}>
        <View>
                <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={19.2} color="gray" />
                </TouchableOpacity>
                <Text style={styles.levelSectionTitle}>{`${route.params.level.charAt(0).toUpperCase() + route.params.level.slice(1)} section`}</Text>
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
        fontFamily:"Rubik_800ExtraBold",
        textAlign:"center",
        fontSize:36,
    },
    BackButton:{
        width: 64,
        height: 64,
        marginTop:48,
        marginLeft:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderColor:"black",
        borderRadius:50,
        borderWidth: 3,
        elevation:5,
    },
    levelNumber:{
        fontSize:24,
        fontFamily:"Rubik_800ExtraBold"
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
        borderColor:"black",
        borderRadius:25,
        borderWidth: 3,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        elevation:5,
    }
})