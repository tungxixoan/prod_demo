import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
function SettingView({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 25,
          paddingTop: 30,
        }}>
        <TouchableOpacity
          style={{height: 35, width: 35, borderRadius: 18}}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 35, width: 35, borderRadius: 18}}
            source={require('../images/back_icon.png')}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Setting View</Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}>
            <Text style={styles.textSubmit}>Go Input</Text>
          </TouchableOpacity>
        </View>
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
    width: '25%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  textSubmit: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
});
export default SettingView;
