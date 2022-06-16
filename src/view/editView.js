import React, {useState} from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
function EditView({navigation}) {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  

  return (
    <View style={styles.container}>
     <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setMail}
        value={mail}></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Full Name"
        value={name}></TextInput>
         <TextInput
        style={styles.input}
        placeholder="Adress"
        onChangeText={setAddress}
        value={address}></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        placeholder="Phone Number"
        value={phone}></TextInput>
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
