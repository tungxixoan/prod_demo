import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function HomeView({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <Text>Full name:</Text>
      <Text>Address:</Text>
      <Text>Phome number:</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Edit')}>
          <Text style={styles.textSubmit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Input')}>
          <Text style={styles.textSubmit}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  textSubmit: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
});
export default HomeView;
