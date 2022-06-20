import React, {useState,useRef,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {updateInput} from '../redux/actions/updateAction';

function InputView({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = () =>{
    if(!email.trim() && !name.trim()){
      alert('Please Enter Information');
      return;
    }
     if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!name.trim()) {
      alert('Please Enter Name');
      return;
    }
   
    
    dispatch(updateInput(email, name))
    navigation.navigate('Home')
  }

  const textRef = useRef()

  useEffect(()=>{
    const unsubscrise = navigation.addListener('focus', () =>{
        setEmail('')
        setName('')
       textRef.current.focus();
    });
    return unsubscrise;

    }, [navigation]
  )

  return (
    <View style={styles.container}>
      <TextInput
        ref={textRef}
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setName}
        value={name}></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}>
        <Text style={styles.textSubmit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  button: {
    backgroundColor: '#41BF24',
    height: 35,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSubmit: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default InputView;
