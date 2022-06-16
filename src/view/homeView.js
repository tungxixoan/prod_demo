import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateEmail} from '../redux/actions/updateAction';

function HomeView({navigation}) {
  const info = useSelector(state => state.personalInfo);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('info: ', info);
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 50,
          width: '80%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.textSubmit}>Go Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textSubmit}> Go Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        <Text>Email:{info.email}</Text>
        <Text>Name:{info.name}</Text>
        <Text>Address:{info.address}</Text>
        <Text>Phone:{info.phone}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(updateEmail(email))}>
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
    width: 250,
    paddingHorizontal: 10,
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
  fontText: {
    fontSize: 22,
    color: 'black',
  },
});
export default HomeView;
