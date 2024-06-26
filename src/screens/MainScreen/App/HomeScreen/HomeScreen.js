import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Image, StyleSheet, Switch, Text, TouchableOpacity, PanResponder, ImageBackground } from 'react-native';
import menu from '../../../../../assets/image/menu.png';
import thermometer from '../../../../../assets/image/thermometer.png';
import { colors } from '@mui/material';
import plus from '../../../../../assets/image/plus.png'
import bgr from '../../../../../assets/image/bgr1.jpg'


const API_KEY = '89e540382ebe3310999da425312cf172'; 

const HomeAppScreen = ({ navigation }) => {
  const [isSwitch1Enabled, setSwitch1Enabled] = useState(false);
  const [isSwitch2Enabled, setSwitch2Enabled] = useState(false);
  const [isSwitch3Enabled, setSwitch3Enabled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState(null);

  const toggleSwitch1 = () => setSwitch1Enabled(prevState1 => !prevState1);
  const toggleSwitch2 = () => setSwitch2Enabled(prevState2 => !prevState2);
  const toggleSwitch3 = () => setSwitch3Enabled(prevState3 => !prevState3);

  const [value, setValue] = useState(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const newValue = Math.round((gestureState.moveX / barWidth) * 100);
        if (newValue >= 0 && newValue <= 100) {
          setValue(newValue);
        }
      },
    })
  ).current;

  const barWidth = 300;
  const segmentWidth = barWidth / 100;
  const segmentFilled = Math.round((value / 100) * barWidth);

  const handlePress = (event) => {
    const { locationX } = event.nativeEvent;
    const clickPosition = locationX;

    const newValue = Math.round((clickPosition / barWidth) * 100);
    if (newValue >= 0 && newValue <= 100) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    // Lấy thời gian hiện tại
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    }, 1000);

    // Lấy nhiệt độ hiện tại từ API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh%20City&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.main && data.main.temp) {
          setCurrentTemperature(data.main.temp);
        } else {
          console.error('Lỗi tìm nhiệt độ: Dữ liệu không có sẵn');
        }
      })
      .catch(error => console.error('Lỗi tìm nhiệt độ:', error));

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground source={bgr} resizeMode="stretch" style={styles.background}>
      <SafeAreaView style={styles.safeAreaView} >
      <TouchableOpacity onPress={navigation.goBack}>
        <Image source={menu} style={styles.menu} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* Xử lý dữ liệu backend */}
          <Text style={styles.text_f}>Hello, I'm Friday</Text>
          <View style={styles.thermometerContainer}>
          <Text style={styles.text_f}>{currentTime}</Text>
            <Image source={thermometer} style={styles.thermometer} />
            <Text style={styles.text_f}>{currentTemperature}°C</Text>
          </View>
        </View>

        <View style={styles.container_switch}>
        <View style={styles.bodySwitch1}>
        <View style={[styles.switchContainer1, styles.switchContainer]}>
            <Text style={styles.text}> Đèn Phòng khách </Text>
            <View style={styles.switchRow}>
              <Text style={styles.emoji}>💡</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isSwitch1Enabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isSwitch1Enabled}
              />
            </View>
          </View>
          <View style={[styles.switchContainer2, styles.switchContainer]}>
            <Text style={styles.text}> Quạt Phòng khách </Text>
            <View style={styles.switchRow}>
              <Text style={styles.emoji}>❄️</Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isSwitch2Enabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isSwitch2Enabled}
              />
            </View>
          </View>
        </View>

        <View style={styles.bodySwitch}>
        <View style={[styles.switchContainer3, styles.switchContainer]}>
            <Text style={styles.text}> Đèn Phòng ngủ </Text>
            <View style={styles.switchRow}>
              <Text style={styles.emoji}>💡</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isSwitch3Enabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch3}
                value={isSwitch3Enabled}
              />
            </View>
          </View>
          <View style={[styles.switchAdd, styles.switchContainer]} >
            <Image source={plus} style={styles.plus}/>
          </View>
        </View>

        </View>
        {/* ... */}
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    shadowColor: '#',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(126, 126, 126, 0.4)',
  },
  menu: {
    width: 24,
    height: 24,
    margin: 16,
  },
  container_switch:{
    borderColor: '#000',
    // borderWidth: 1,
    padding : 20,
    width: '95%',
    marginTop: 10,
    flexDirection: 'column'
  },
 
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  switchAdd:{
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    // alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(175, 238, 238)',
    width: '95%',
    height: 'auto',
    borderRadius: 5,
    borderColor: '#000',
    // borderWidth: 1,
    
    
    },
    switchContainer3:{
      width: '48%',
      marginRight: 20,
    },
    text_f:{
      fontSize: 20,
      marginHorizontal: 10,
    },
  thermometerContainer: {
    marginTop: 20,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  thermometer: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  bodySwitch1: {
    flexDirection: 'row',
  },
  bodySwitch: {
    flexDirection: 'row',
  },
  switchContainer: {
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'rgba(175, 238, 238, 0.8)',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'dotted'
    },
    switchContainer1:{
      marginRight: 20,
    },
    
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  emoji: {
    fontSize: 32,
    marginRight: 8,
  },
  plus: {
    height: 30,
    width: 30,
  },
});

export default HomeAppScreen;
