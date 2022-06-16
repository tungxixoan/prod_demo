import React from "react";
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
function SettingView({navigation}){
    return <View style={styles.container}>
        <Text>Setting View</Text>
        
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.textSubmit}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.popToTop()}>
        <Text style={styles.textSubmit}>Go Input</Text>
      </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#41BF24',
        height: 35,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      },
      textSubmit:{
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
      }
})
export default SettingView;