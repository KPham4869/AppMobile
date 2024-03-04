import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import back from '../../../assets/image/back.png'

import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native'



const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const navigation = useNavigation();


  const onSubnmitPressed =() =>{
    console.warn(" onSubnmitPressed ");
  
  }
  const onSignInPressed =() =>{
    navigation.navigate("SignIn")
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={navigation.goBack}>
      <Image source={back} style={styles.back}/>
    </TouchableOpacity>

    <View style={styles.root}>
      <Text style={styles.title}>Lấy lại mật khẩu</Text>

    <CustomInput 
      placeholder="Mã xác thực" 
      value={code} 
      setValue={setCode}
      />
    <CustomInput 
      placeholder="Nhập mật khẩu mới" 
      value={newPassword} 
      setValue={setNewPassword}
      secureTextEntry={true}
      />
    
    <CustomButton text="Xác nhận" onPress={onSubnmitPressed}  />
 
    <CustomButton
      text="Quay lại đăng nhập" 
      onPress={onSignInPressed} 
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
  },
  
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text:{
    color: "black",
    marginVertical: 10,
  },
  link:{
    color: '#FF8C00'
  },
  back: {
    // position: 'absolute',
    width: 25,
    height: 25,
    top: 10,
    left: 10,
    padding: 10,
  },
});

export default NewPasswordScreen