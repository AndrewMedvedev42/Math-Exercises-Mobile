import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';

export const Home = () => {
    return(
        <View style={{backgroundColor:"#fc0", flex:1}}>
        <Text style={styles.title}>Home</Text>
          <View style={styles.buttonContainer}>
  
            <TouchableOpacity style={styles.button}>
              <Text>Easy Level</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text>Medium Level</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text>Hard Level</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text>About...</Text>
            </TouchableOpacity>
  
          </View>
          <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    title:{
      color:"#ff8000",
      textAlign:"center",
      fontWeight:"bold",
      fontSize:36,
      margin:18,
      marginTop:76,
    },
    buttonContainer:{
      justifyContent:"center",
      alignItems:"center",
    },
    button:{
      width: 319,
      margin: 6,
      padding: 20,
      borderColor:"black",
      borderRadius:25,
      borderWidth: 3,
      backgroundColor:"white",
      elevation: 5,
      
    }
  });
  