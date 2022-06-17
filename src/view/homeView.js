import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function HomeView({navigation}) {
  const infos = useSelector(state => state.personalInfo);
  const dispatch = useDispatch();
  const handleEdit = (index) =>{
    navigation.navigate('Edit', {index: index})

  }
  // console.log('infos: ', infos);
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
          onPress={() => navigation.goBack()}>
          <Text style={styles.textSubmit}> Go Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.textSubmit}>Go Setting</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        {infos.map((info, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 350,
                marginLeft: 30,
                alignItems: 'center',
              }}>
              <Text style={{flex: 6}}>
                Email: {info.email} - Name: {info.name} - Address: {info.address} - Phone: {info.phone}
              </Text>
              <TouchableOpacity style={{flex: 1}} onPress={() => handleEdit(index)}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../images/edit_icon.png')}></Image>
              </TouchableOpacity>
            </View>
          );
        })}
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
