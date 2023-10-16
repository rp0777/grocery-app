import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 100,
          borderRadius: 50,
        }}
      />
      <Text
        style={{
          marginTop: 50,
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: 600,
          color: '#000',
        }}>
        Login
      </Text>
      <TextInput
        placeholder="Enter Email Id"
        style={{
          alignSelf: 'center',
          width: '85%',
          paddingLeft: 20,
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 50,
        }}
      />
      <TextInput
        placeholder="Enter Email Id"
        style={{
          alignSelf: 'center',
          width: '85%',
          paddingLeft: 20,
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Login;
