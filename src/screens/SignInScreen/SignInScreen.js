import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';

import Logo from '../../../assets/image/logo.jpeg'

import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed =() =>{
    navigation.navigate('Login')
  
  }
  
  const onSignUpPressed =() =>{
    navigation.navigate('SignUp')
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
    
      <Image 
      source={Logo}
      style={[styles.logo , {height: height*0.3}]}
      resizeMode='contain'
      ></Image>

    <CustomButton text="Đăng nhập bằng tài khoản" onPress={onSignInPressed}  />
  
    <SocialSignInButtons/>
    <CustomButton style={styles.buttom}
      text="Bạn chưa có tài khoản? Tạo tài khoản" 
      onPress={onSignUpPressed} 
      type="TERTIARY"
    />
    </View>
  </ScrollView>
  );
};
const styles = StyleSheet.create({

  root:{
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#AFEEEE',

  },
  logo:{
    marginTop: 60,
    width: '80%',
    maxWidth: 400,
    maxHeight: 300,
    borderRadius: 25,
    marginBottom: 20,

  },
});

export default SignInScreen