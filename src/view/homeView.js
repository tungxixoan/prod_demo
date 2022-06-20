import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteInfo} from '../redux/actions/updateAction';

function HomeView({navigation}) {
  const infos = useSelector(state => state.personalInfo);
  console.log('infors: ', infos);
  const dispatch = useDispatch();
  const handleEdit = index => {
    console.log('home: ', index);
    navigation.navigate('Edit', {index: index});
  };
  const handleDelete = index => {
    console.log(index);
    dispatch(deleteInfo(index));
  };

  const GridView = ({index, email, name, address, phone}) => (
    <View
      key={index}
      style={{
        flex: 1,
        margin: 10,
        padding: 5,
        width: '50%',
        backgroundColor: '#99CCFF',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'red',
      }}>
      <View style={{width: '100%'}}>
        <View style={{height: 40}}>
          <Text style={styles.fontText}>
            Email: {email}
          </Text>
        </View>
        <View style={{height: 40}}>
          <Text style={styles.fontText}>
            Name: {name}
          </Text>
        </View>
        <View style={{height: 40}}>
          <Text style={styles.fontText}>
            Address: {address}
          </Text>
        </View>
        <View style={{height: 40}}>
          <Text style={styles.fontText}>
            Phone: {phone}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => handleEdit(index)}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../images/edit_icon.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleDelete(index);
          }}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../images/delete_icon.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 30,
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          height: '16%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 35, width: 35, borderRadius: 18}}
            source={require('../images/add_icon.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Setting')}>
          <Image
            style={{height: 35, width: 35, borderRadius: 18}}
            source={require('../images/setting_icon.png')}
            resizeMode="cover"></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{
          width: '100%',
        }}
        data={infos}
        renderItem={({item, index}) => (
          <GridView
            index={index}
            name={item.name}
            email={item.email}
            address={item.address}
            phone={item.phone}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  
  fontText: {color: 'black', fontWeight: '500'},
});
export default HomeView;
