import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function HomeView({navigation}) {
  const infos = useSelector(state => state.personalInfo);
  const dispatch = useDispatch();
  const handleEdit = index => {
    navigation.navigate('Edit', {index: index});
  };
  // console.log('infos: ', infos);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 35, width: 35, borderRadius: 18,}}
            source={require('../images/add_icon.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Setting')}>
          <Image style={{height: 35, width: 35, borderRadius: 18}} source={require('../images/setting_icon.png')} resizeMode='cover' ></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'flex-start',
          width: '100%',
          paddingTop: '25%',
          alignItems: 'center',
        }}>
        {infos.map((info, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                width: '85%',
              }}>
              <Text style={{flex: 6, color: 'black', fontWeight: '500'}}>
                Email: {info.email} - Name: {info.name} - Address:{' '}
                {info.address} - Phone: {info.phone}
              </Text>
              <TouchableOpacity onPress={() => handleEdit(index)}>
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
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#41BF24',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    
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
