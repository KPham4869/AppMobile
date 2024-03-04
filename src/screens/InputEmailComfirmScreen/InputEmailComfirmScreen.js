import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'

import back from '../../../assets/image/back.png'

const InputEmailComfirmScreen = () => {
  const [email, setEmail] = useState("");
  
  const navigate = useNavigation();
  const navigation = useNavigation();
  
  const onConfirmPressed =() =>{
    navigate.navigate('NewPassword')
  
  }
  const onSignInPressed =() =>{
    navigate.navigate('SignIn')
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={navigation.goBack}>
        <Image source={back} style={styles.back} />
      </TouchableOpacity>
    <View style={styles.root}>
      <Text style={styles.title}>Tìm tài khoản của bạn </Text>

    <CustomInput 
      placeholder="Nhập email tài khoản" value={email} setValue={setEmail}/>
    
    <CustomButton text="Tìm tải khoản" onPress={onConfirmPressed}  />
  
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
    flex: 1,
    // backgroundColor: '#AFEEEE',
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

export default InputEmailComfirmScreen