import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';

import back from '../../../assets/image/back.png';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  
  
  const onSendPressed =() =>{
    console.warn(" onConfirmPressed ");
  
  }
  const onSignInPressed =() =>{
    console.warn("onSignInPressed");
  }
  const onResendPressed =() =>{
    console.warn("onResendPressed");
  }
  const onPrivacyPolicyPressed =() =>{
    console.warn("onPrivacyPolicyPressed");
  }
  // const navigation = useNavigation();
  // const navigate = useNavigation();

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity >
    <Image source={back} style={styles.back}  />
    </TouchableOpacity>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

    <CustomInput 
      placeholder="Enter comfirmation code" 
      value={username} 
      setValue={setUsername}
      />
    
    <CustomButton text="Send" onPress={onSendPressed}  />
 
    <CustomButton
      text="Back to Sign in" 
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

export default ForgotPasswordScreen