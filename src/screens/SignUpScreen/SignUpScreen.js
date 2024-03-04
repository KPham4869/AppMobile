import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'
import back from '../../../assets/image/back.png'



const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  
  const navigation = useNavigation();
  
  const onRegisterPressed =() =>{
    navigation.navigate('ConfirmEmail')
  
  }
  const onSignInPressed =() =>{
    navigation.navigate('SignIn')
  }
  const onTermsofUsePressed =() =>{
    console.warn("Điều khoản sử dụng");
  }
  const onPrivacyPolicyPressed =() =>{
    console.warn("Chính sách bảo mật");
  }

  return (
  <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={navigation.goBack}>
    <Image source={back} style={styles.back} onPress={navigation.goBack} />
    </TouchableOpacity>

    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

    <CustomInput 
      placeholder="Tên đăng nhập" 
      value={username} 
      setValue={setUsername}
    />
    <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
    />
    <CustomInput 
      placeholder="Mật khẩu" 
      value={password} 
      setValue={setPassword}
      secureTextEntry={true}
    />
    <CustomInput 
      placeholder="Nhập lại mật khẩu" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry={true}
    />
    <CustomButton text="Đăng ký" onPress={onRegisterPressed}  />
    <Text style={styles.text}>Bạn hãy xác nhận rằng bạn chấp nhận
      <Text style={styles.link} onPress={onTermsofUsePressed}> Điều khoản sử dụng </Text>và
      <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Chính sách bảo mật</Text> 
    </Text>
    
    <CustomButton
      text="Bạn đã có tài khoản? Đăng nhập" 
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

export default SignUpScreen