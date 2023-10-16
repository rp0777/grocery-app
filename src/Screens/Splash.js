import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          resizeMode: 'center',
        }}
      />
    </View>
  );
};

export default Splash;
