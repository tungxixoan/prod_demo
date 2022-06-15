import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function EditView({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Edit View</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textSubmit}>Update</Text>
      </TouchableOpacity>
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
export default EditView;
