import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import { editInfo } from '../redux/actions/updateAction';

function EditView({navigation, route}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const infos = useSelector(state => state.personalInfo);
  const {index} = route.params;
  const dispatch = useDispatch();
  // console.log('items', itemEdit);
  const handleEdit = () =>{
    // console.log(index, email, name, address, phone)
    dispatch(editInfo(index, email, name, address, phone))
    navigation.navigate('Home')
  }

  useEffect(() => {
    const itemEdit = infos[index]
    setEmail(itemEdit.email)
    setName(itemEdit.name)
    setAddress(itemEdit.address)
    setPhone(itemEdit.phone)

  }, [index])
  
  // console.log(mail, name);
  return (
    <View style={styles.container}>
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
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 50,
          width: '80%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textSubmit}> Go Home</Text>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#41BF24',
    height: 35,
    width: '35%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    height: 40,
    width: '50%',
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
