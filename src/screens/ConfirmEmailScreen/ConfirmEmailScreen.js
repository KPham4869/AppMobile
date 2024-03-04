import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'

import back from '../../../assets/image/back.png'

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  
  const navigate = useNavigation();
  
  const onConfirmPressed =() =>{
    console.warn(" onConfirmPressed ");
  
  }
  const onSignInPressed =() =>{
    navigate.navigate('SignIn')
  }
  const onResendPressed =() =>{
    console.warn("Đã gửi lại mã");
  }
  const navigation = useNavigation();
  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={navigation.goBack}>
    <Image source={back} style={styles.back}  />
    </TouchableOpacity>
    <View style={styles.root}>
      <Text style={styles.title}>Xác thực Email </Text>

    <CustomInput 
      placeholder="Mã xác thực" value={code} setValue={setCode}/>
    
    <CustomButton text="Xác nhận" onPress={onConfirmPressed}  />
  
    <CustomButton
      text="Gửi lại mã" 
      onPress={onResendPressed} 
      type="SECONDARY"
    />
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

export default ConfirmEmailScreen