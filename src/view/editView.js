import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { editInfo } from '../redux/actions/updateAction';

function EditView({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const infos = useSelector(state => state.personalInfo);
  const { index } = route.params;
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editInfo(index, email, name, address, phone))
    navigation.navigate('Home')
  }

  useEffect(() => {
    // console.log(infos);
    const itemEdit = infos[index]
    // console.log('itemEdit: ',itemEdit);
    setEmail(itemEdit.email)
    setName(itemEdit.name)
    setAddress(itemEdit.address)
    setPhone(itemEdit.phone)

  }, [index])

  return (
    <View style={styles.container}>
      <View style={{flex: 1,  width: '100%' , paddingHorizontal: 25,
          paddingTop: 30,}}>
      <TouchableOpacity
          style={{height: 35, width: 35, borderRadius: 18,}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 35, width: 35, borderRadius: 18}}
            source={require('../images/back_icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        flex: 10,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          onChangeText={setEmail}
          value={email}></TextInput>
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleEdit}>
          <Text style={styles.textSubmit}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    backgroundColor: '#41BF24',
    height: 35,
    width: '30%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    height: 40,
    width: '60%',
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textSubmit: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
});
export default EditView;
