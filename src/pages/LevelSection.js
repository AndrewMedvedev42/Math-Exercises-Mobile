import React from 'react';
import {Data} from "../Data/Data"
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';

export const LevelSection = () => {

    return(<View style={{backgroundColor:"#fc0", flex:1}}>
        <View style={styles.levelListContainer}>
            {Data.map((item)=>{
            const {sortKey, index} = item
            if (sortKey === "hard") {
                return (
                    <TouchableOpacity style={styles.levelSlot}>
                        <Text>{index}</Text>
                    </TouchableOpacity>
                )
            }
        })}
        </View>
    </View>)
}

const styles = StyleSheet.create({
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