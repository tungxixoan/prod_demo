import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function InputView({navigation}) {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const[infors, setInfors] = useState([])
  
  const handleSubmit = ()=>{
    setInfors([
      ...infors,
      {
        mail: mail,
        name: name,
      },
    ]);
    console.log({infors});
    navigation.navigate('HomeTaps', {infors:infors})
    setMail('')
    setName('')
    
  }


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
    backgroundColor: '#CC4141',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
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
    borderRadius: 15,
  },
  textSubmit: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default InputView;
