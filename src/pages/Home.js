import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native';

export const Home = ({navigation}) => {
    return(
        <View style={{flex:1}}>
        <Text style={styles.title}>ClassRoom</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LevelSection',{level:"easy"})}>
              <Text style={styles.buttonText}>Easy Level</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LevelSection',{level:"medium"})}>
              <Text style={styles.buttonText}>Medium Level</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LevelSection',{level:"hard"})}>
              <Text style={styles.buttonText}>Hard Level</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
              <Text style={styles.buttonText}>About...</Text>
            </TouchableOpacity>
  
          </View>
          <StatusBar style="auto" />
                    
      </View>
    )
}

const styles = StyleSheet.create({
    title:{
      color:"#cc6600",
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
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:25,
      borderWidth: 3,
      elevation:5,
      
    },
    buttonText:{
      color:"black",
      fontSize:18,
      fontWeight:"bold"
    }
  });
  